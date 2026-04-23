const fs = require("fs");
const path = require("path");

console.log("🔄 Restarting Sanebox build safely...");

// 1. Ensure pages folder exists
const pagesDir = path.join(__dirname, "pages");
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}

// 2. Create a simple test page (so build is NEVER empty)
const testPage = `
<!DOCTYPE html>
<html>
<head>
  <title>Sanebox Restart Page</title>
</head>
<body>
  <h1>🚀 Sanebox System Restarted</h1>
  <p>If you see this, deployment is working again.</p>
  <a href="https://try.sanebox.com/efdrajzfvk2c">
    Try Sanebox
  </a>
</body>
</html>
`;

fs.writeFileSync(
  path.join(pagesDir, "sanebox-restart.html"),
  testPage
);

console.log("✅ Restart page created successfully");
console.log("📦 Ready for GitHub Pages deployment");
