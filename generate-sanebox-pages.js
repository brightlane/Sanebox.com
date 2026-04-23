const fs = require("fs");
const path = require("path");

const outputDir = "./";

const affiliate = "https://try.sanebox.com/efdrajzfvk2c";

const topics = [
  "clean-email-inbox",
  "stop-spam-email",
  "email-management-tips",
  "organize-gmail",
  "reduce-email-stress",
  "best-inbox-tools"
];

function generateContent(topic, i) {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${topic.replace(/-/g, " ")} Guide ${i}</title>
  <meta name="description" content="Learn how to ${topic.replace(/-/g, " ")} using simple tools.">
</head>

<body style="font-family: Arial; max-width: 800px; margin: auto;">

<h1>📧 ${topic.replace(/-/g, " ").toUpperCase()}</h1>

<p>
👉 <a href="${affiliate}">Start using SaneBox to fix your inbox →</a>
</p>

<h2>Why This Matters</h2>
<p>
Email overload wastes time and causes stress. Most people never fix it.
</p>

<h2>How to Fix It</h2>
<ul>
  <li>Remove junk emails</li>
  <li>Filter incoming messages</li>
  <li>Automate your inbox</li>
</ul>

<p>
🔥 <a href="${affiliate}">Try SaneBox free</a>
</p>

<h2>Final Tip</h2>
<p>
Automation is the fastest way to regain control of your inbox.
</p>

<p>
🚀 <a href="${affiliate}">Clean your inbox now</a>
</p>

</body>
</html>
`;
}

// generate 50 pages
for (let i = 0; i < 50; i++) {
  const topic = topics[i % topics.length];
  const filename = `${topic}-${String(i).padStart(3, "0")}.html`;

  fs.writeFileSync(filename, generateContent(topic, i));
}

console.log("✅ 50 SaneBox pages generated");
