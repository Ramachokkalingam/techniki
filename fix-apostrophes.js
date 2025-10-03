const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing apostrophes in TSX files...\n');

const files = [
  'src/app/page.tsx',
  'src/app/events/page.tsx',
  'src/app/team/page.tsx',
  'src/app/events/ctrl-think/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all unescaped apostrophes with &apos;
    content = content.replace(/tomorrow's/g, "tomorrow&apos;s");
    content = content.replace(/India's/g, "India&apos;s");
    content = content.replace(/we're/g, "we&apos;re");
    content = content.replace(/We're/g, "We&apos;re");
    content = content.replace(/Don't/g, "Don&apos;t");
    content = content.replace(/Can't/g, "Can&apos;t");
    content = content.replace(/Let's/g, "Let&apos;s");
    content = content.replace(/you're/g, "you&apos;re");
    content = content.replace(/Techनिकी's/g, "Techनिकी&apos;s");
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file}`);
  } else {
    console.log(`⚠️  Not found: ${file}`);
  }
});

console.log('\n✅ All apostrophes fixed!');
console.log('Run: npm run build');
