import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const openapiPath = path.join(__dirname, '../openapi.yaml');

const content = fs.readFileSync(openapiPath, 'utf8');
const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
const updated = content.replace(/^(\s+title:\s*')(.+)(')/m, `$1$2${randomChar}$3`);

fs.writeFileSync(openapiPath, updated);
console.log(`Appended '${randomChar}' to info.title`);
