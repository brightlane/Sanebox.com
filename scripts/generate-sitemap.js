const fs = require("fs");
const path = require("path");

// 📁 folders
const pagesDir = path.join(__dirname, "..", "pages");
const outputFile = path.join(__dirname, "..", "public", "sitemap.xml");

// 🌐 your site base URL (CHANGE THIS if needed)
const baseUrl = "https://brightlane.github.io/Sanebox.com/pages";

// ensure public folder exists
const publicDir = path.join(__dirname, "..", "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 📂 read real files
const files = fs.existsSync(pagesDir)
  ? fs.readdirSync(pagesDir).filter(f => f.endsWith(".html"))
  : [];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// 🧠 add homepage first
sitemap += `
  <url>
    <loc>https://brightlane.github.io/Sanebox.com/</loc>
    <priority>1.0</priority>
  </url>\n`;

// 📄 add real pages
files.forEach(file => {
  const url = `${baseUrl}/${file}`;

  sitemap += `
  <url>
    <loc>${url}</loc>
    <priority>0.8</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

// 💾 write file
fs.writeFileSync(outputFile, sitemap);

console.log("✅ Sitemap generated from REAL pages:", files.length);
