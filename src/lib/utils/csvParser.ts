export interface CSVRow {
  id: string;
  team_name: string;
  name: string;
  email_id: string;
  enrollment: string;
}

export function parseCSV(csvContent: string): CSVRow[] {
  const lines = csvContent.trim().split('\n');
  
  return lines.slice(1).map(line => {
    // Handle CSV with possible commas in fields
    const values = line.split(',').map(v => v.trim());
    return {
      id: values[0] || '',
      team_name: values[1] || '',
      name: values[2] || '',
      email_id: values[3] || '',
      enrollment: values[4] || '',
    };
  });
}

export function generateCertificateId(id: string): string {
  return `TECH-CT-2025-${id.padStart(3, '0')}`;
}
