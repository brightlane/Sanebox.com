const fs = require("fs");

const AFFILIATE_URL = "https://try.sanebox.com/efdrajzfvk2c";

// High-quality V3 social posts (human-readable, non-spammy, varied tone)
const posts = [
  {
    id: 1,
    platform: "x",
    text:
      "Inbox overload isn’t a time management problem anymore — it’s a filtering problem.\n\nMost people don’t need more discipline… they need less noise.\n\nSaneBox quietly sorts your email so you only see what matters.\n\nTry it: " +
      AFFILIATE_URL,
    tags: ["productivity", "email", "focus"]
  },
  {
    id: 2,
    platform: "x",
    text:
      "If your inbox feels like a second job, it’s not your fault.\n\nEmail wasn’t designed for modern volume.\n\nSaneBox automatically filters distractions so you can focus on real work.\n\n" +
      AFFILIATE_URL,
    tags: ["email", "productivity"]
  },
  {
    id: 3,
    platform: "linkedin",
    text:
      "Most digital overwhelm doesn’t come from tasks — it comes from noise.\n\nThe modern inbox is overloaded by default, not by mistake.\n\nSaneBox helps restore signal over noise by automatically filtering unimportant emails.\n\nLearn more: " +
      AFFILIATE_URL,
    tags: ["productivity", "systems", "work"]
  },
  {
    id: 4,
    platform: "x",
    text:
      "You don’t need to check email better.\n\nYou need fewer emails competing for your attention.\n\nThat’s what inbox filtering tools like SaneBox are built for.\n\n" +
      AFFILIATE_URL,
    tags: ["focus", "email"]
  },
  {
    id: 5,
    platform: "x",
    text:
      "Your brain isn’t overloaded.\n\nYour inbox is.\n\nFix the input, not your discipline.\n\nSaneBox helps clean it automatically:\n" +
      AFFILIATE_URL,
    tags: ["stress", "productivity"]
  },
  {
    id: 6,
    platform: "linkedin",
    text:
      "High performers don’t manage email better — they reduce what reaches their attention.\n\nInbox filtering is one of the simplest productivity upgrades most people overlook.\n\nSaneBox helps automate that filter layer.\n\n" +
      AFFILIATE_URL,
    tags: ["performance", "workflow"]
  },
  {
    id: 7,
    platform: "x",
    text:
      "Inbox zero isn’t the goal.\n\nInbox relevance is.\n\n" +
      AFFILIATE_URL,
    tags: ["minimalism", "email"]
  },
  {
    id: 8,
    platform: "x",
    text:
      "Most productivity problems are actually attention problems.\n\nSaneBox reduces inbox noise so you can focus on what matters.\n\n" +
      AFFILIATE_URL,
    tags: ["focus", "deep work"]
  }
];

// Write output file for your system
const output = {
  generatedAt: new Date().toISOString(),
  count: posts.length,
  affiliate: AFFILIATE_URL,
  posts
};

fs.writeFileSync("social-v3.json", JSON.stringify(output, null, 2));

console.log("✅ social-v3.json generated successfully");
