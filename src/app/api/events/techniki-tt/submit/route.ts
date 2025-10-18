import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import os from 'os';

type Payload = {
  projectTitle?: string;
  projectDesc?: string;
  leader?: string;
  leaderCourse?: string;
  joinedWhatsapp?: boolean;
  members?: string[];
  [key: string]: string | string[] | boolean | undefined;
};

const DATA_DIR = path.resolve(process.cwd(), 'data', 'events');
const CSV_PATH = path.join(DATA_DIR, 'techniki-tt.csv');
const TMP_DIR = path.join(os.tmpdir(), 'techniki-events');
const TMP_CSV_PATH = path.join(TMP_DIR, 'techniki-tt.csv');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function toCSVRow(obj: Record<string, string | string[] | boolean | undefined>, headers: string[]) {
  return headers.map(h => {
    const v = obj[h];
    if (v === undefined || v === null) return '';
    // Escape quotes
    const s = Array.isArray(v) ? v.join('; ') : String(v);
    return `"${s.replace(/"/g, '""')}"`;
  }).join(',') + '\n';
}

export async function POST(req: Request) {
  try {
    const payload: Payload = await req.json();

    ensureDir(DATA_DIR);

    // Ensure CSV exists with headers (primary and tmp fallback)
    const defaultHeaders = [
      'timestamp',
      'projectTitle',
      'projectDesc',
      'leader',
      'leaderCourse',
      'members',
      'joinedWhatsapp',
    ];

    // Helper to write initial csv with headers to a path
    const writeInitialCsv = (p: string) => {
      try {
        const dir = path.dirname(p);
        ensureDir(dir);
        if (!fs.existsSync(p)) fs.writeFileSync(p, defaultHeaders.join(',') + '\n');
        return true;
      } catch (err) {
        return false;
      }
    };

    // Try primary location first; if that fails due to read-only FS, we'll fallback to tmp
    let targetPath = CSV_PATH;
    if (!writeInitialCsv(targetPath)) {
      // Fallback to tmp dir
      targetPath = TMP_CSV_PATH;
      writeInitialCsv(targetPath);
    }

    // Read existing headers from the selected target and merge with any extra keys in payload
    const existing = fs.readFileSync(targetPath, 'utf8').split('\n')[0] || '';
    const existingHeaders = existing.split(',').filter(Boolean);
    const extraKeys = Object.keys(payload).filter(k => !existingHeaders.includes(k) && !defaultHeaders.includes(k));
    const headers = Array.from(new Set([...existingHeaders, ...extraKeys]));

    // If headers changed (new extra keys), rewrite CSV with merged headers and keep old rows
    if (headers.join(',') !== existingHeaders.join(',')) {
      const rows = fs.readFileSync(targetPath, 'utf8').split('\n');
      const oldData = rows.slice(1).filter(Boolean).join('\n');
      try {
        fs.writeFileSync(targetPath, headers.join(',') + '\n' + (oldData ? oldData + '\n' : ''));
      } catch (err) {
        // If rewrite fails on primary, try tmp fallback
        if (targetPath !== TMP_CSV_PATH) {
          ensureDir(TMP_DIR);
          fs.writeFileSync(TMP_CSV_PATH, headers.join(',') + '\n' + (oldData ? oldData + '\n' : ''));
          targetPath = TMP_CSV_PATH;
        } else {
          throw err;
        }
      }
    }

    // Build row
    const rowObj: Record<string, string | string[] | boolean | undefined> = {};
    headers.forEach(h => {
      if (h === 'timestamp') rowObj[h] = new Date().toISOString();
      else rowObj[h] = payload[h] ?? '';
    });

    const row = toCSVRow(rowObj, headers);
    try {
      fs.appendFileSync(targetPath, row);
    } catch (err: any) {
      // If append fails on primary due to read-only, fallback to temp
      if (targetPath !== TMP_CSV_PATH) {
        ensureDir(TMP_DIR);
        fs.appendFileSync(TMP_CSV_PATH, row);
        targetPath = TMP_CSV_PATH;
      } else {
        throw err;
      }
    }

    const savedToTmp = targetPath === TMP_CSV_PATH;
    return NextResponse.json({ success: true, savedToTmp, path: targetPath });
  } catch (err: unknown) {
    console.error('Error saving submission', err);
    const errorMessage = err instanceof Error ? err.message : 'Failed';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
