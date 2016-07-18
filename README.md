# SVG spritesheet tool #
This is a preconfigured setup using [svg-sprite](https://github.com/jkphl/svg-sprite) to generate a symbol spritesheet of SVG icons.

## Installation ##
Run `npm install` first to install all dependencies. `npm` is the package manager of Node.js. If you are not yet using Node.js, you may use [nvm](https://github.com/creationix/nvm) to install it.

## Generating ##
Separate icons are placed in `src`. Run `npm run build`. The spritesheet can be found in `dist/`.

## Usage ##
Icons in the spritesheet can be addressed with `<svg><use xlink:href="/img/icons.svg#github"></use></html>`, where `/img/icons.svg` is the path to the spritesheet, and `github` is the symbol name. The symbols are named after their original filename.
