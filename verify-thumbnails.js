// Verify all component thumbnails are properly embedded as base64
const fs = require('fs');

console.log('Reading code.ts...\n');
const codeContent = fs.readFileSync('./code.ts', 'utf8');

// Extract all components
const componentRegex = /{\s*key:\s*"([^"]+)",\s*name:\s*"([^"]+)",[\s\S]*?thumbnail_url:\s*"([^"]*)"/g;
let match;
const components = [];

while ((match = componentRegex.exec(codeContent)) !== null) {
  components.push({
    key: match[1],
    name: match[2],
    thumbnail: match[3]
  });
}

console.log(`Found ${components.length} components\n`);
console.log('=== THUMBNAIL VERIFICATION ===\n');

let embedded = 0;
let missing = 0;
let errors = [];

components.forEach((comp, index) => {
  const hasBase64 = comp.thumbnail.startsWith('data:image/');
  const status = hasBase64 ? '✓' : '✗';
  const type = comp.thumbnail.includes('svg') ? 'SVG' : comp.thumbnail.includes('png') ? 'PNG' : 'NONE';
  
  if (hasBase64) {
    embedded++;
    const sizeKB = (comp.thumbnail.length / 1024).toFixed(2);
    console.log(`${status} ${comp.name.padEnd(40)} ${type.padEnd(5)} ${sizeKB} KB`);
  } else {
    missing++;
    errors.push(comp.name);
    console.log(`${status} ${comp.name.padEnd(40)} MISSING`);
  }
});

console.log('\n=== SUMMARY ===');
console.log(`Total components: ${components.length}`);
console.log(`✓ Embedded: ${embedded}`);
console.log(`✗ Missing: ${missing}`);

if (errors.length > 0) {
  console.log('\n⚠️  Components missing thumbnails:');
  errors.forEach(name => console.log(`   - ${name}`));
  console.log('\nRun the appropriate conversion script:');
  console.log('  - For SVG: node convert-all-thumbnails.js');
  console.log('  - For PNG: node convert-preface-thumbnails.js');
} else {
  console.log('\n✓ All thumbnails properly embedded!');
}

// Calculate total embedded size
const totalSize = components.reduce((sum, comp) => sum + comp.thumbnail.length, 0);
console.log(`\nTotal embedded thumbnail size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
