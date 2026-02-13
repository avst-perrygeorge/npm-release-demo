import fs from 'fs';
import path from 'path';

const version = process.argv[2];

if (!version) {
  console.error('Usage: node sync-package-version.ts <version>');
  process.exit(1);
}

const sdkPkgPath = path.join(__dirname, '../packages/sdk/package.json');
const pkg = JSON.parse(fs.readFileSync(sdkPkgPath, 'utf8'));
pkg.version = version;
fs.writeFileSync(sdkPkgPath, JSON.stringify(pkg, null, 2) + '\n');

console.log(`Updated SDK version to ${version}`);
