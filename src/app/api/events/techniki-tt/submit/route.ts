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
    // Escape quotes and handle arrays
    const s = Array.isArray(v) ? v.join('; ') : String(v);
    return `"${s.replace(/"/g, '""')}"`;
  }).join(',') + '\n';
}

export async function POST(req: Request) {
  try {
    const payload: Payload = await req.json();

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
    const writeInitialCsv = (p: string): boolean => {
      try {
        const dir = path.dirname(p);
        ensureDir(dir);
        if (!fs.existsSync(p)) {
          fs.writeFileSync(p, defaultHeaders.join(',') + '\n', 'utf8');
        }
        return true;
      } catch (err) {
        console.error(`Failed to initialize CSV at ${p}:`, err);
        return false;
      }
    };

    // Try primary location first; if that fails due to read-only FS, fallback to tmp
    let targetPath = CSV_PATH;
    let savedToTmp = false;

    if (!writeInitialCsv(targetPath)) {
      // Fallback to tmp dir
      targetPath = TMP_CSV_PATH;
      savedToTmp = true;
      if (!writeInitialCsv(targetPath)) {
        throw new Error('Unable to initialize CSV file in primary or temp location');
      }
    }

    // Read existing CSV and parse headers
    const fileContent = fs.readFileSync(targetPath, 'utf8');
    const lines = fileContent.split('\n').filter(line => line.trim().length > 0);
    
    if (lines.length === 0) {
      // File is empty, write default headers
      fs.writeFileSync(targetPath, defaultHeaders.join(',') + '\n', 'utf8');
    }

    // Parse existing headers
    const headerLine = lines[0] || '';
    const existingHeaders = headerLine.split(',').map(h => h.trim()).filter(Boolean);
    
    // Find extra keys in payload that aren't in existing headers
    const payloadKeys = Object.keys(payload);
    const extraKeys = payloadKeys.filter(k => !existingHeaders.includes(k));
    
    // Merge headers: existing + new extra keys
    const headers = [...existingHeaders, ...extraKeys];

    // If headers changed, rewrite CSV with new headers
    if (extraKeys.length > 0) {
      try {
        const dataRows = lines.slice(1); // Skip header row
        const newContent = headers.join(',') + '\n' + 
                          (dataRows.length > 0 ? dataRows.join('\n') + '\n' : '');
        fs.writeFileSync(targetPath, newContent, 'utf8');
      } catch (err) {
        // If rewrite fails on primary, try tmp fallback
        if (targetPath !== TMP_CSV_PATH) {
          ensureDir(TMP_DIR);
          const dataRows = lines.slice(1);
          const newContent = headers.join(',') + '\n' + 
                            (dataRows.length > 0 ? dataRows.join('\n') + '\n' : '');
          fs.writeFileSync(TMP_CSV_PATH, newContent, 'utf8');
          targetPath = TMP_CSV_PATH;
          savedToTmp = true;
        } else {
          throw err;
        }
      }
    }

    // Build row object with all headers
    const rowObj: Record<string, string | string[] | boolean | undefined> = {};
    headers.forEach(h => {
      if (h === 'timestamp') {
        rowObj[h] = new Date().toISOString();
      } else {
        rowObj[h] = payload[h] ?? '';
      }
    });

    // Generate CSV row
    const row = toCSVRow(rowObj, headers);

    // Append row to CSV
    try {
      fs.appendFileSync(targetPath, row, 'utf8');
    } catch (err) {
      // If append fails on primary due to read-only, fallback to temp
      if (targetPath !== TMP_CSV_PATH) {
        ensureDir(TMP_DIR);
        
        // Copy existing data to temp location first
        const existingData = fs.readFileSync(targetPath, 'utf8');
        fs.writeFileSync(TMP_CSV_PATH, existingData, 'utf8');
        
        // Append new row
        fs.appendFileSync(TMP_CSV_PATH, row, 'utf8');
        targetPath = TMP_CSV_PATH;
        savedToTmp = true;
      } else {
        throw err;
      }
    }

    return NextResponse.json({ 
      success: true, 
      savedToTmp, 
      path: targetPath 
    });
  } catch (err: unknown) {
    console.error('Error saving submission:', err);
    const errorMessage = err instanceof Error ? err.message : 'Failed to save submission';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}