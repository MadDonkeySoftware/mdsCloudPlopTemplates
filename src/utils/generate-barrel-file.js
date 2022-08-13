/**
 *
 * @param {string} existingBody
 * @param {any} newData
 * @returns
 */
export function generateBarrelFile(existingBody, newData) {
  let items = [newData.name];

  // Extract existing items in the barrel file
  const regExp = /export \* from '\.\/(.*)';/gm;
  let match;
  do {
    match = regExp.exec(existingBody);
    if (match) {
      items.push(match[1]);
    }
  } while (match);

  // Alphabetize the barrel file items
  items.sort((a, b) => a.localeCompare(b));

  return items.map((e) => `export * from './${e}';`).join('\n') + '\n';
}
