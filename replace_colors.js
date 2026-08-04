const fs = require('fs');
const files = [
  'app/components/Header.tsx',
  'app/components/ProfileSection.tsx',
  'app/components/ProjectsSection.tsx',
  'app/components/SkillsSection.tsx',
  'app/components/Footer.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/bg-black/g, 'bg-canvas');
  content = content.replace(/text-white/g, 'text-ink');
  content = content.replace(/border-white/g, 'border-ink');
  content = content.replace(/bg-white/g, 'bg-ink');
  content = content.replace(/text-black/g, 'text-canvas');
  content = content.replace(/text-gray-400/g, 'text-ink-muted');
  content = content.replace(/text-gray-300/g, 'text-ink-muted');
  content = content.replace(/border-gray-600/g, 'border-ink-muted');
  content = content.replace(/text-gray-500/g, 'text-ink-muted');
  content = content.replace(/shadow-\[8px_8px_0_0_#ffffff\]/g, 'shadow-[8px_8px_0_0_var(--ink)]');
  
  // inline styles
  content = content.replace(/background: 'black'/g, "background: 'var(--canvas)'");
  content = content.replace(/background: 'white'/g, "background: 'var(--ink)'");
  content = content.replace(/color: 'white'/g, "color: 'var(--ink)'");
  content = content.replace(/border: `2px solid white`/g, "border: `2px solid var(--ink)`");
  content = content.replace(/color: progress > 50 \? 'black' : 'white'/g, "color: progress > 50 ? 'var(--canvas)' : 'var(--ink)'");
  
  fs.writeFileSync(file, content);
});
console.log('Replaced colors');
