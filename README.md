# MDS Cloud Plop Templates

## Notes

- Do not use "barrel files" as it confuses rolleup

## Local Setup

First install plop globally

`npm i -g plop`

Also, build the code from this repo.

`npm run build`

Then you'll want to update your `.bashrc` or `.zshrc` file adding the line.

- `alias my-plop="plop --plopfile [PATH_TO_THIS_DIR]/dist/plopfile.js" --dest $(pwd)`

If you ever want to uninstall remember to remove the above alias!
