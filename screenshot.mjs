import puppeteer from 'puppeteer';
import { readdir, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const outDir = fileURLToPath(new URL('./temporary screenshots/', import.meta.url));
await mkdir(outDir, { recursive: true });

// auto-increment N
let n = 1;
try {
  const files = await readdir(outDir);
  const nums = files
    .map(f => /^screenshot-(\d+)/.exec(f))
    .filter(Boolean)
    .map(m => parseInt(m[1], 10));
  if (nums.length) n = Math.max(...nums) + 1;
} catch {}

const name = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const out = outDir + name;

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();

// desktop by default; pass viewport via env
const w = parseInt(process.env.W || '1440', 10);
const h = parseInt(process.env.H || '900', 10);
await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise(r => setTimeout(r, 500));

// force all scroll-reveal elements visible so full-page capture shows real content
await page.evaluate(async () => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  document.querySelectorAll('.gauge-arc').forEach(el => el.classList.add('go'));
  window.scrollTo(0, 0);
  await new Promise(r => setTimeout(r, 350));
});

await page.screenshot({ path: out, fullPage: process.env.FULL !== '0' });
await browser.close();
console.log('Saved', out);
