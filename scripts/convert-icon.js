#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import toIco from 'to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pngPath = path.join(__dirname, '../build/icon.png');
const icoPath = path.join(__dirname, '../build/icon.ico');

async function convertIcon() {
  try {
    if (!fs.existsSync(pngPath)) {
      console.error(`Error: ${pngPath} not found`);
      process.exit(1);
    }

    const pngBuffer = fs.readFileSync(pngPath);
    const icoBuffer = await toIco([pngBuffer]);

    fs.writeFileSync(icoPath, icoBuffer);
    console.log(`✓ Converted ${pngPath} → ${icoPath}`);

    // Verify ICO header
    const header = icoBuffer.slice(0, 4);
    const expectedHeader = Buffer.from([0x00, 0x00, 0x01, 0x00]);
    if (Buffer.compare(header, expectedHeader) === 0) {
      console.log('✓ ICO header valid');
    } else {
      console.warn('⚠ Warning: ICO header format');
    }
  } catch (err) {
    console.error('Error converting icon:', err.message);
    process.exit(1);
  }
}

convertIcon();
