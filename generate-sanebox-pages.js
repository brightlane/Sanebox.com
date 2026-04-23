const fs = require("fs");

const affiliate = "https://try.sanebox.com/efdrajzfvk2c";

const keywords = [
  "email management",
  "inbox zero",
  "spam filter",
  "newsletter cleanup",
  "priority inbox",
  "email productivity",
  "declutter email",
  "stop spam emails"
];

if (!fs.existsSync("pages")) {
  fs.mkdirSync("pages");
}

for (let i = 0; i < 200; i++) {
  const keyword = keywords[i % keywords.length];

  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Sanebox Guide ${i}</title>
</head>
<body>
  <h1>How Sanebox Helps with ${keyword}</h1>

  <p>Sanebox automatically organizes your inbox.</p>

  <a href="${affiliate}">
    Try Sanebox here
  </a>
</body>
</html>
`;

  fs.writeFileSync(`pages/sanebox-${String(i).padStart(5, "0")}.html`, html);
}

console.log("Pages generated");
