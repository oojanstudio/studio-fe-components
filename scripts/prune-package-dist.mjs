import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const srcIndexPath = path.join(projectRoot, 'src/lib/index.ts');
const distComponentsDir = path.join(projectRoot, 'dist/components');

/**
 * @param {string} indexSource
 */
function getExportedComponentNames(indexSource) {
  const exportRegex = /from\s+["']\.\/components\/([\w-]+)\.svelte["']/g;
  const names = new Set();

  for (const match of indexSource.matchAll(exportRegex)) {
    names.add(match[1]);
  }

  return names;
}

/**
 * @param {string} filename
 */
function getComponentNameFromBuiltFile(filename) {
  if (filename.endsWith('.svelte.d.ts')) {
    return filename.slice(0, -'.svelte.d.ts'.length);
  }

  if (filename.endsWith('.svelte')) {
    return filename.slice(0, -'.svelte'.length);
  }

  return null;
}

/**
 * @param {string} filePath
 */
async function removeIfExists(filePath) {
  try {
    await fs.rm(filePath, { force: true });
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const indexSource = await fs.readFile(srcIndexPath, 'utf8');
  const exportedNames = getExportedComponentNames(indexSource);

  let files;
  try {
    files = await fs.readdir(distComponentsDir);
  } catch {
    return;
  }

  let removedCount = 0;

  for (const filename of files) {
    const filePath = path.join(distComponentsDir, filename);

    if (filename.includes('.stories.')) {
      if (await removeIfExists(filePath)) removedCount += 1;
      continue;
    }

    const componentName = getComponentNameFromBuiltFile(filename);
    if (!componentName) continue;

    if (!exportedNames.has(componentName)) {
      if (await removeIfExists(filePath)) removedCount += 1;
    }
  }

  if (removedCount > 0) {
    console.log(`[prune-package-dist] removed ${removedCount} non-package file(s)`);
  }
}

await main();
