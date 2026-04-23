#!/usr/bin/env node
/**
* SANEB OX AFFILIATE EMPIRE FACTORY
* 50K PAGES → $10K+/MONTH RECURRING
*/

const fs = require('fs');
const path = require('path');

// ================================
// EDIT THESE 3 LINES (DONE FOR YOU)
// ================================
const EMPIRE_CONFIG = {
  name: 'SaneBox',
  affiliateUrl: 'https://try.sanebox.com/efdrajzfvk2c',
  subId: 'brightlane',
  payout: '20-30% recurring',
  keywords: ['email','inbox','spam','clutter','gmail','outlook','newsletter','unsubscribe','zero inbox','email filter','priority inbox','email management'],
  amount: 'Unlimited emails',
  states: ['all']
};

console.log(`🚀 SANEB OX EMPIRE: ${EMPIRE_CONFIG.name}`);

// GENERATE 50K PAGES ULTRA-TURBO
const template = `<!DOCTYPE html>
<html>
<head>
  <title>%QUERY% - SaneBox</title>
  <meta name="description" content="SaneBox %QUERY%: Clean inbox fast. %AMOUNT%. %PAYOUT%. Try free now.">
  <meta name="keywords" content="${EMPIRE_CONFIG.keywords.join(',')}">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="canonical" href="https://brightlane.github.io/claudio-sanebox/%FILE%">
</head>
<body style="max-width:800px;margin:0 auto;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.6;">

  <div style="background:#f8f9fa;padding:20px;border-radius:12px;margin-bottom:25px;">
    <h1 style="color:#1a1a1a;font-size:2.2em;margin:0 0 15px 0;">%QUERY%</h1>
    <p style="color:#666;font-size:1.1em;margin:0;">Clean your inbox in seconds. %AMOUNT%. Works with Gmail, Outlook, all providers.</p>
  </div>

  <div style="background:#e8f5e8;padding:30px;border-radius:16px;border-left:6px solid #28a745;margin-bottom:30px;">
    <h2 style="color:#155724;margin:0 0 15px 0;font-size:1.5em;">✅ SaneBox - #1 Email Manager</h2>
    <p style="margin:0 0 20px 0;"><strong>Works instantly</strong> | <strong>Cancel anytime</strong> | <strong>14-day free trial</strong></p>
    <a href="${EMPIRE_CONFIG.affiliateUrl}&clickId=%CLICKID%&subId=${EMPIRE_CONFIG.subId}"
      style="background:#28a745;color:white;padding:20px 40px;font-size:22px;font-weight:bold;border-radius:12px;text-decoration:none;display:inline-block;box-shadow:0 4px 12px rgba(40,167,69,0.3);"
      rel="sponsored">Start Free Trial →</a>
    <p style="font-size:0.9em;color:#666;margin:15px 0 0 0;">
      <strong>Affiliate Disclosure:</strong> We earn commission if you sign up. No cost to you.
    </p>
  </div>

  <div style="margin:30px 0;">
    <h3 style="color:#1a1a1a;">Why %QUERY% Users Love SaneBox</h3>
    <ul style="color:#444;line-height:1.7;padding-left:20px;">
      <li>Automatically sorts email into folders</li>
      <li>Training gets smarter over time</li>
      <li>One-click unsubscribe from spam</li>
      <li>Works Gmail, Outlook, Apple Mail</li>
      <li>14-day free trial, cancel anytime</li>
    </ul>
  </div>

  <div style="background:#f8f9fa;padding:25px;border-radius:12px;text-align:center;">
    <p style="margin:0 0 15px 0;font-size:0.95em;color:#666;">
      <a href="index.html" style="color:#28a745;">More inbox solutions</a> | 
      <a href="sanebox-legal.html" style="color:#28a745;">Legal</a>
    </p>
    <p style="font-size:0.8em;color:#999;margin:0;">© 2026 SaneBox Promotions</p>
  </div>

</body>
</html>`;

// CREATE PUBLIC FOLDER & 50K PAGES
if (!fs.existsSync('./public')) fs.mkdirSync('./public', {recursive: true});

console.log('⚡ Generating 50,000 SaneBox pages...');
for(let i = 0; i < 50000; i++) {
  const keyword = EMPIRE_CONFIG.keywords[i % EMPIRE_CONFIG.keywords.length];
  const query = keyword.replace(/\\s+/g, '-');
  const clickId = Date.now() + '-' + i + '-' + Math.random().toString(36).substr(2,6);
  const filename = `sanebox-${i.toString().padStart(5,'0')}-${query}.html`;
  
  const page = template
    .replace(/%QUERY%/g, query.charAt(0).toUpperCase() + query.slice(1).replace(/-/g, ' '))
    .replace(/%AMOUNT%/g, EMPIRE_CONFIG.amount)
    .replace(/%PAYOUT%/g, EMPIRE_CONFIG.payout)
    .replace(/%CLICKID%/g, clickId)
    .replace(/%FILE%/g, filename);

  fs.writeFileSync(`./public/${filename}`, page);
}

// SITEMAP.XML (SEO GOLD)
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://brightlane.github.io/claudio-sanebox/</loc><priority>1.0</priority></url>`;
for(let i = 0; i < 50000; i++) {
  const keyword = EMPIRE_CONFIG.keywords[i % EMPIRE_CONFIG.keywords.length];
  const query = keyword.replace(/\\s+/g, '-');
  sitemap += `<url><loc>https://brightlane.github.io/claudio-sanebox/sanebox-${i.toString().padStart(5,'0')}-${query}.html</loc><priority>0.8</priority></url>`;
}
sitemap += '</urlset>';
fs.writeFileSync('./public/sitemap.xml', sitemap);

// ROBOTS.TXT
fs.writeFileSync('./public/robots.txt', `User-agent: *
Allow: /
Sitemap: https://brightlane.github.io/claudio-sanebox/sitemap.xml`);

// LEGAL PAGE
fs.writeFileSync('./public/sanebox-legal.html', `<!DOCTYPE html>
<html><head><title>SaneBox Legal - Affiliate Disclosure</title></head>
<body style="max-width:800px;margin:0 auto;padding:40px;font-family:system-ui;">
<h1>Affiliate Disclosure</h1>
<p>This site promotes SaneBox email management. We earn commissions when you sign up through our links. This is at no additional cost to you.</p>
<p>Individual results vary. SaneBox offers 14-day free trial with cancel anytime.</p>
<p>Last updated: ${new Date().toISOString()}</p>
</body></html>`);

// INDEX.HTML
fs.writeFileSync('./public/index.html', `<!DOCTYPE html>
<html><head><title>SaneBox - Clean Your Inbox</title>
<meta name="description" content="SaneBox: Clean Gmail, Outlook inbox automatically. Free trial.">
</head>
<body style="text-align:center;padding:60px;font-family:system-ui;">
<h1 style="font-size:3em;color:#28a745;">SaneBox</h1>
<p style="font-size:1.3em;color:#666;">Clean your inbox in seconds</p>
<a href="sanebox-00001-email.html" style="background:#28a745;color:white;padding:20px 40px;font-size:22px;font-weight:bold;border-radius:12px;text-decoration:none;">Get Started Free</a>
<p style="font-size:0.9em;color:#999;margin-top:40px;"><a href="sanebox-legal.html">Legal</a></p>
</body></html>`);

console.log('✅ 50,000 SaneBox pages COMPLETE!');
