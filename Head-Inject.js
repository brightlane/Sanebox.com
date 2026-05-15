/**
 * head-inject.js — brightlane/Sanebox.com
 * Drop this file in the ROOT of the Sanebox.com repo.
 * Run: node head-inject.js
 * Re-run anytime — already-patched files are skipped.
 * For a new file: node head-inject.js newpage.html
 */

const fs   = require('fs');
const path = require('path');

// ── PER-PAGE SEO CONFIG ──────────────────────────────────────────────────────
const PAGES = {
  'index.html': {
    title:       'SaneBox Review 2026: AI Email Organizer That Saves Hours Every Week',
    description: 'SaneBox uses AI to sort your inbox automatically. 500K+ professionals save 2.5 hours/week. Free 14-day trial + $15 credit. Works with Gmail, Outlook, Apple Mail.',
    url:         'https://brightlane.github.io/Sanebox.com/',
    type:        'website',
  },
  'sanebox-review.html': {
    title:       'SaneBox Review 2026: Honest In-Depth Analysis — Is It Worth It?',
    description: 'Full SaneBox review: features, pricing, pros, cons, and real results. Cut inbox clutter by 50%. Free 14-day trial + exclusive $15 credit.',
    url:         'https://brightlane.github.io/Sanebox.com/sanebox-review.html',
    type:        'article',
  },
  'blog.html': {
    title:       'Email Productivity Blog 2026 — Inbox Zero Tips & SaneBox Guides',
    description: 'Actionable email productivity tips, inbox zero strategies, and SaneBox guides updated weekly. Free 14-day trial + $15 credit.',
    url:         'https://brightlane.github.io/Sanebox.com/blog.html',
    type:        'article',
  },
  'clean-email-inbox.html': {
    title:       'How to Clean Your Email Inbox Fast in 2026 (Step-by-Step Guide)',
    description: 'Complete step-by-step guide to inbox zero. Clean thousands of emails fast using AI tools like SaneBox. Free trial included.',
    url:         'https://brightlane.github.io/Sanebox.com/clean-email-inbox.html',
    type:        'article',
  },
  '404.html': {
    title:       'Page Not Found | BrightLane SaneBox',
    description: 'The page you were looking for could not be found.',
    url:         'https://brightlane.github.io/Sanebox.com/404.html',
    type:        'website',
  },
};

const DEFAULTS = {
  title:       'SaneBox 2026 — AI Email Organizer | BrightLane',
  description: 'AI email organizer that reduces inbox clutter by up to 50%. Free 14-day trial + $15 credit.',
  url:         'https://brightlane.github.io/Sanebox.com/',
  type:        'article',
};

const BASE_URL  = 'https://brightlane.github.io/Sanebox.com';
const IMAGE_URL = `${BASE_URL}/assets/sanebox-cover.jpg`;
const MARKER    = '<!-- BL-HEAD-INJECTED -->';

// ── HEAD BUILDER ─────────────────────────────────────────────────────────────
function buildHead({ title, description, url, type }) {
  return `${MARKER}
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- VERIFICATION -->
  <meta name="google-site-verification" content="eWVDN3vbam9nnaZQu7wAQKyfmJJdM7zjI80l4DGeUrQ">
  <meta name="msvalidate.01" content="574044E39556B8B8DAAF1D1F233C87B0">
  <meta name="p:domain_verify" content="PASTE_PINTEREST_TOKEN_HERE">

  <!-- SEO -->
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="SaneBox review 2026, AI email organizer, inbox zero, email productivity, SaneLater, SaneBlackHole, email management tool, best email app 2026">
  <meta name="author" content="BrightLane Editorial">
  <meta name="publisher" content="BrightLane">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="googlebot" content="index,follow">
  <meta name="bingbot" content="index,follow">
  <meta name="language" content="English">
  <meta name="geo.region" content="US">
  <meta name="geo.placename" content="United States">

  <!-- GOOGLE NEWS + DISCOVER -->
  <meta name="news_keywords" content="SaneBox, email productivity, inbox zero, AI email management, email organizer 2026">
  <meta name="syndication-source" content="${BASE_URL}/">
  <meta name="original-source" content="${BASE_URL}/">

  <!-- APPLE NEWS -->
  <meta name="apple-news:identifier" content="sanebox-brightlane-2026">
  <meta name="format-detection" content="telephone=no">

  <!-- MICROSOFT START -->
  <meta name="ms.locale" content="en-us">
  <meta name="ms.category" content="productivity">

  <!-- AI CRAWLERS -->
  <meta name="ai-content-declaration" content="human-written, AI-assisted research">
  <meta name="content-type" content="Product Review">
  <meta name="document-classification" content="Productivity Software Review">
  <meta name="coverage" content="Worldwide">
  <meta name="distribution" content="Global">

  <!-- OPEN GRAPH -->
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="BrightLane">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${IMAGE_URL}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="SaneBox AI Email Organizer — BrightLane 2026">
  <meta property="article:author" content="BrightLane Editorial">
  <meta property="article:published_time" content="2026-01-01T00:00:00Z">
  <meta property="article:modified_time" content="2026-05-15T00:00:00Z">
  <meta property="article:section" content="Email Productivity">
  <meta property="article:tag" content="SaneBox">
  <meta property="article:tag" content="inbox zero">
  <meta property="article:tag" content="AI email management">
  <meta property="article:tag" content="productivity 2026">

  <!-- TWITTER / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${IMAGE_URL}">

  <!-- CANONICAL -->
  <link rel="canonical" href="${url}">

  <!-- PWA -->
  <link rel="manifest" href="/Sanebox.com/manifest.json">
  <meta name="theme-color" content="#c9a84c">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="SaneBox Review">

  <!-- FEEDS & DISCOVERY -->
  <link rel="alternate" type="application/rss+xml" title="BrightLane RSS" href="/Sanebox.com/feed.xml">
  <link rel="author" href="/Sanebox.com/humans.txt">
  <link rel="preconnect" href="https://try.sanebox.com">
  <link rel="dns-prefetch" href="https://try.sanebox.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">

  <!-- SCHEMA -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "headline": "${title}",
        "description": "${description}",
        "image": { "@type": "ImageObject", "url": "${IMAGE_URL}", "width": 1200, "height": 630 },
        "author": { "@type": "Organization", "name": "BrightLane", "url": "${BASE_URL}/" },
        "publisher": { "@type": "Organization", "name": "BrightLane", "logo": { "@type": "ImageObject", "url": "${BASE_URL}/assets/logo.png" } },
        "datePublished": "2026-01-01T00:00:00Z",
        "dateModified": "2026-05-15T00:00:00Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "${url}" },
        "articleSection": "Email Productivity",
        "keywords": "SaneBox, AI email organizer, inbox zero, email management 2026",
        "inLanguage": "en-US",
        "isAccessibleForFree": true
      },
      {
        "@type": "SoftwareApplication",
        "name": "SaneBox",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "7", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "3200" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${BASE_URL}/" },
          { "@type": "ListItem", "position": 2, "name": "SaneBox Review", "item": "${url}" }
        ]
      }
    ]
  }
  </script>`;
}

// ── FILE WALKER ───────────────────────────────────────────────────────────────
function getHtmlFiles(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules','.git','public','scripts'].includes(entry.name)) {
      files = files.concat(getHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

// ── PATCHER ───────────────────────────────────────────────────────────────────
function patch(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  if (html.includes(MARKER)) {
    console.log(`⏭  Already patched — skipping: ${filePath}`);
    return;
  }

  // Find <head> — handle both <head> and <head (broken tag)
  const headMatch = html.match(/<head[^>]*>/i) || html.match(/<head\s*/i);
  if (!headMatch) {
    console.log(`⚠️  No <head> found — skipping: ${filePath}`);
    return;
  }

  // Fix broken <head tag if missing >
  if (!html.includes('<head>') && !html.match(/<head[^>]+>/i)) {
    html = html.replace(/<head\s*/i, '<head>');
  }

  // Strip duplicate tags that we'll re-inject
  html = html
    .replace(/<meta\s+charset=["'][^"']*["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']viewport["'][^>]*>/gi, '')
    .replace(/<meta\s+http-equiv=["']X-UA-Compatible["'][^>]*>/gi, '')
    .replace(/<title>[^<]*<\/title>/gi, '');

  const cfg = { ...DEFAULTS, ...(PAGES[path.basename(filePath)] || {}) };
  const insertPoint = html.match(/<head[^>]*>/i)[0];
  html = html.replace(insertPoint, insertPoint + '\n' + buildHead(cfg) + '\n');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✅ Patched: ${filePath}`);
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
const target = process.argv[2];
if (target) {
  const abs = path.resolve(target);
  if (!fs.existsSync(abs)) { console.error(`❌ Not found: ${abs}`); process.exit(1); }
  patch(abs);
} else {
  const files = getHtmlFiles(process.cwd());
  console.log(`Found ${files.length} HTML file(s)...\n`);
  files.forEach(patch);
  console.log('\nDone.');
}
