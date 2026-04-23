const fs = require("fs");
const path = require("path");

const affiliate = "https://try.sanebox.com/efdrajzfvk2c";

// ensure output folder exists
const outputDir = path.join(__dirname, "pages");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const keywords = [
  "email management",
  "inbox zero",
  "spam filtering",
  "newsletter cleanup",
  "priority inbox",
  "email productivity",
  "declutter email",
  "stop spam emails"
];

// generate real HTML pages
for (let i = 0; i < 50; i++) {
  const keyword = keywords[i % keywords.length];

  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Sanebox Guide - ${keyword}</title>
</head>
<body>
  <h1>How Sanebox Helps with ${keyword}</h1>

  <p>
    Sanebox automatically sorts your email so you focus on what matters.
  </p>

  <p>
    It reduces inbox clutter and improves productivity.
  </p>

  <a href="${affiliate}">
    Try Sanebox Here
  </a>

</body>
</html>
`;

  const fileName = `sanebox-${String(i).padStart(4, "0")}.html`;
  fs.writeFileSync(path.join(outputDir, fileName), html);
}

console.log("✅ Pages generated successfully");
