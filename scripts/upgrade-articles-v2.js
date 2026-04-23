const fs = require("fs");
const path = require("path");

const affiliate = "https://try.sanebox.com/efdrajzfvk2c";
const baseUrl = "https://brightlane.github.io/Sanebox.com/pages/";

const dir = path.join(__dirname, "../public/pages");
const files = fs.readdirSync(dir);

function makeInternalLinks(currentFile) {
  return files
    .filter(f => f !== currentFile)
    .slice(0, 3)
    .map(f => {
      const slug = f.replace(".html", "");
      return `<li><a href="${baseUrl}${f}">${slug.replace(/-/g, " ")}</a></li>`;
    })
    .join("\n");
}

function buildPage(title, file) {
  const internalLinks = makeInternalLinks(file);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>

  <meta name="description" content="${title} - Learn how to improve email productivity and reduce inbox overload.">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- SEO Schema (Google understands this better) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${title}",
    "author": {
      "@type": "Organization",
      "name": "Email Productivity Guide"
    }
  }
  </script>

  <style>
    body { font-family: Arial; max-width: 800px; margin: auto; line-height: 1.6; }
    header { padding: 20px 0; border-bottom: 1px solid #ddd; }
    .cta { background: #f5f5f5; padding: 15px; margin: 20px 0; border-left: 4px solid #333; }
  </style>
</head>

<body>

<header>
  <h1>${title}</h1>
  <p>Advanced guide to email productivity and inbox control</p>
</header>

<main>

<section>
  <h2>Why Inbox Chaos Happens</h2>
  <p>
    Email systems fail because everything arrives in one place with no prioritization.
    This creates cognitive overload and slows decision-making.
  </p>
</section>

<section>
  <h2>The Modern Solution</h2>
  <p>
    Instead of manual sorting, automation systems categorize emails based on importance and behavior patterns.
  </p>
</section>

<div class="cta">
  <h2>Recommended Tool</h2>
  <p>
    SaneBox automatically organizes your inbox so you only see important messages.
  </p>
  <a href="${affiliate}">👉 Try SaneBox Now</a>
</div>

<section>
  <h2>Advanced Productivity Strategy</h2>
  <ul>
    <li>Batch email checking (not constant checking)</li>
    <li>Automated filtering for low priority messages</li>
    <li>Strict unsubscribe discipline</li>
    <li>Inbox as a task queue, not storage</li>
  </ul>
</section>

<section>
  <h2>Related Articles</h2>
  <ul>
    ${internalLinks}
  </ul>
</section>

<section>
  <h2>Final Insight</h2>
  <p>
    Email productivity is not about working harder — it's about reducing unnecessary input streams.
  </p>
</section>

</main>

</body>
</html>
`;
}

files.forEach(file => {
  if (!file.endsWith(".html")) return;

  const title = file.replace(".html", "").replace(/-/g, " ");
  const filePath = path.join(dir, file);

  fs.writeFileSync(filePath, buildPage(title, file));
});

console.log("🚀 100x upgrade applied to:", files.length, "pages");
