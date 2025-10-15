import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type Payload = {
  projectTitle?: string;
  projectDesc?: string;
  leader?: string;
  leaderCourse?: string;
  joinedWhatsapp?: boolean;
  members?: string[];
  [key: string]: any;
};

const DATA_DIR = path.resolve(process.cwd(), 'data', 'events');
const CSV_PATH = path.join(DATA_DIR, 'techniki-tt.csv');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function toCSVRow(obj: Record<string, any>, headers: string[]) {
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

    // Ensure CSV exists with headers
    const defaultHeaders = [
      'timestamp',
      'projectTitle',
      'projectDesc',
      'leader',
      'leaderCourse',
      'members',
      'joinedWhatsapp',
    ];

    if (!fs.existsSync(CSV_PATH)) {
      fs.writeFileSync(CSV_PATH, defaultHeaders.join(',') + '\n');
    }

    // Read existing headers and merge with any extra keys in payload (so columns remain consistent)
    const existing = fs.readFileSync(CSV_PATH, 'utf8').split('\n')[0] || '';
    const existingHeaders = existing.split(',').filter(Boolean);
    const extraKeys = Object.keys(payload).filter(k => !existingHeaders.includes(k) && !defaultHeaders.includes(k));
    const headers = Array.from(new Set([...existingHeaders, ...extraKeys]));

    // If headers changed (new extra keys), rewrite CSV with merged headers and keep old rows
    if (headers.join(',') !== existingHeaders.join(',')) {
      const rows = fs.readFileSync(CSV_PATH, 'utf8').split('\n');
      const oldData = rows.slice(1).filter(Boolean).join('\n');
      fs.writeFileSync(CSV_PATH, headers.join(',') + '\n' + (oldData ? oldData + '\n' : ''));
    }

    // Build row
    const rowObj: Record<string, any> = {};
    headers.forEach(h => {
      if (h === 'timestamp') rowObj[h] = new Date().toISOString();
      else rowObj[h] = payload[h] ?? '';
    });

    const row = toCSVRow(rowObj, headers);
    fs.appendFileSync(CSV_PATH, row);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error saving submission', err);
    return NextResponse.json({ error: err?.message || 'Failed' }, { status: 500 });
  }
}
