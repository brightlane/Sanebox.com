const fs = require("fs");
const path = require("path");

// 🧠 keywords = pages you actually want created
const keywords = [
  "email",
  "inbox",
  "spam",
  "clutter",
  "gmail",
  "outlook",
  "newsletter",
  "unsubscribe",
  "zero-inbox",
  "email-filter"
];

// 📁 output folder (REAL pages will be created here)
const outDir = path.join(__dirname, "..", "pages");

// create folder if it doesn't exist
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 🧾 generate real HTML files
keywords.forEach((word) => {
  const slug = word.replace(/\s+/g, "-").toLowerCase();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>${word} | Sanebox Guide</title>
  <meta name="description" content="Learn about ${word} and email management strategies.">
</head>
<body style="font-family: Arial; padding: 40px;">

  <h1>🧠 ${word.toUpperCase()}</h1>

  <p>
    This is a real generated page about <strong>${word}</strong>.
    You can later expand this into SEO content, guides, or landing pages.
  </p>

  <a href="../index.html">⬅ Back to home</a>

</body>
</html>
`;

  fs.writeFileSync(
    path.join(outDir, `${slug}.html`),
    html
  );

  console.log("Created:", slug + ".html");
});

console.log("✅ DONE: Real pages generated in /pages");
