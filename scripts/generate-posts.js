const fs = require("fs");
const path = require("path");

const baseAffiliate = "https://try.sanebox.com/efdrajzfvk2c";

const posts = [
  {
    slug: "inbox-zero-guide",
    title: "Inbox Zero Guide: How to Finally Control Your Email",
    keywords: "inbox zero, email productivity"
  },
  {
    slug: "gmail-cleanup",
    title: "How to Clean Up Gmail in 10 Minutes a Day",
    keywords: "gmail cleanup, email organization"
  },
  {
    slug: "email-overload-solution",
    title: "The Real Solution to Email Overload in 2026",
    keywords: "email overload, productivity tools"
  }
];

const outDir = path.join(__dirname, "../public/pages");

fs.mkdirSync(outDir, { recursive: true });

posts.forEach(post => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>${post.title}</title>
  <meta name="description" content="${post.keywords}">
</head>
<body>

<h1>${post.title}</h1>

<p>
Email overload destroys focus and productivity. This guide shows how to fix it using automation tools like SaneBox.
</p>

<h2>Why Email Becomes a Problem</h2>
<p>
Most people process emails manually, which creates constant interruption and wasted time.
</p>

<h2>The Smarter Approach</h2>
<p>
Instead of sorting emails yourself, you use automation to prioritize important messages.
</p>

<h2>Recommended Tool</h2>
<p>
SaneBox helps automatically filter non-important emails so your inbox stays clean.
</p>

<p>
<a href="${baseAffiliate}">Try SaneBox Here</a>
</p>

<h2>Final Thought</h2>
<p>
Inbox control is not about effort—it’s about automation.
</p>

</body>
</html>
`;

  fs.writeFileSync(`${outDir}/${post.slug}.html`, html);
});

console.log("✅ Generated posts:", posts.length);
