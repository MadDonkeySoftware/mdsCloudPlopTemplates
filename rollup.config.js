// TODO: Look into using rollup.js built in "watch" instead of nodemon

const path = require('path');
const fs = require('fs');

// NOTE: This would be files that you want to end up in "dist"
const inputDirectories = [
  'src'
]
const outConfig = []

function isValidFile(name) {
  const ext = path.extname(name); // Ex: ".js"
  // console.log(`"${ext}"`);
  return ext !== '' && name.endsWith(ext) && !name.endsWith(`.test${ext}`);
}

for (const inDir of inputDirectories) {
  const dirItems = fs.readdirSync(`${__dirname}${path.sep}${inDir}`, { withFileTypes: true });
  for (let i = 0; i < dirItems.length; i++) {
    const item = dirItems[i];
    if (isValidFile(item.name)) {
      outConfig.push({
        input: path.join(__dirname, inDir, item.name),
        output: [{
          // use direct string replace since we only want to replace the first occurrence.
          file: path.join(__dirname, inDir.replace('src', 'dist'), item.name),
          format: 'es',
        }],
      });
    }
  }
}

// console.dir(outConfig, { depth: 10 });

export default outConfig;