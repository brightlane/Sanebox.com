const fs = require("fs");
const path = require("path");

const affiliate = "https://try.sanebox.com/efdrajzfvk2c";

const pagesDir = path.join(__dirname, "../public/pages");

const files = fs.readdirSync(pagesDir);

function wrapSEO(html, title) {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <meta name="description" content="Improve your email productivity with SaneBox. Learn strategies to clean your inbox and stay focused.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

<header>
  <h1>${title}</h1>
  <p><strong>Email productivity guide & inbox optimization strategies</strong></p>
</header>

<main>

<section>
  <h2>Why Email Feels Overwhelming</h2>
  <p>
    Most inboxes are overloaded with newsletters, promotions, notifications, and important messages mixed together.
    This creates constant distraction and loss of focus.
  </p>
</section>

<section>
  <h2>The Smarter Way to Handle Email</h2>
  <p>
    Instead of manually sorting messages, modern tools use automation to prioritize what matters.
  </p>
</section>

<section>
  <h2>Recommended Tool</h2>
  <p>
    SaneBox automatically filters unimportant emails so your inbox stays clean and focused.
  </p>

  <p>
    👉 <a href="${affiliate}">Try SaneBox here</a>
  </p>
</section>

<section>
  <h2>Key Productivity Tips</h2>
  <ul>
    <li>Only check email at set times</li>
    <li>Archive aggressively</li>
    <li>Unsubscribe from unnecessary lists</li>
    <li>Use automation to reduce manual sorting</li>
  </ul>
</section>

<section>
  <h2>Final Thoughts</h2>
  <p>
    Productivity is not about doing more — it’s about removing friction from your workflow.
  </p>
</section>

</main>

<footer>
  <p>© Email Productivity System</p>
</footer>

</body>
</html>
`;
}

// Enhance existing pages safely (no deletion, no generators)
files.forEach(file => {
  const filePath = path.join(pagesDir, file);

  if (!file.endsWith(".html")) return;

  const title = file.replace(".html", "").replace(/-/g, " ");

  const newHtml = wrapSEO("", title);

  fs.writeFileSync(filePath, newHtml);
});

console.log("✅ Articles enhanced:", files.length);
