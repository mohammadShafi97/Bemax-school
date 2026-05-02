const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'app/about/page.tsx', image: '/hero-2.jpg' },
  { file: 'app/academics/page.tsx', image: '/smart.jpg' },
  { file: 'app/admissions/page.tsx', image: '/tree.webp' },
  { file: 'app/beyond-academics/page.tsx', image: '/arts.jpg' },
  { file: 'app/contact/page.tsx', image: '/hero-3.jpg' },
  { file: 'app/gallery/page.tsx', image: '/express.JPG' },
  { file: 'app/student-support/page.tsx', image: '/mat.jpg' }
];

pages.forEach(p => {
  const filePath = path.join(process.cwd(), p.file);
  if (!fs.existsSync(filePath)) {
    console.log('Not found:', p.file);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace import
  content = content.replace(/import Hero from ["']@\/components\/ui\/Hero["'];/, 'import PageHeader from "@/components/ui/PageHeader";');
  
  // Replace <Hero ... /> with <PageHeader imagePath="..." ... />
  // We need to carefully replace the <Hero tag without breaking other things.
  // Assuming <Hero \n title=... etc
  content = content.replace(/<Hero\s+title=/g, `<PageHeader imagePath="${p.image}" title=`);
  
  // Also if there's any <Hero\n that doesn't start with title, we can just replace <Hero with <PageHeader
  content = content.replace(/<Hero\b/g, '<PageHeader');
  content = content.replace(/<\/Hero>/g, '</PageHeader>');
  
  fs.writeFileSync(filePath, content);
  console.log('Updated:', p.file);
});
