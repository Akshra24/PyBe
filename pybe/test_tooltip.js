const fs = require('fs');
const html = fs.readFileSync('home.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) { console.log('No script found'); process.exit(1); }
const script = scriptMatch[1];
try {
    new Function(script);
    console.log('Script syntax OK');
} catch(e) {
    console.error('Error:', e.message);
}