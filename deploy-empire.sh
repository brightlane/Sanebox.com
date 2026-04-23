#!/bin/bash
echo "🚀 DEPLOYING SANEB OX EMPIRE (50K PAGES)"
npm install
node claudio-factory.js
git add . -A
git commit -m "SaneBox Empire: 50k pages LIVE $(date)" || echo "No changes"
git push origin main
echo "🎉 LIVE: https://brightlane.github.io/claudio-sanebox/"
