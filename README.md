# SVG spritesheet tool #
This is a preconfigured setup using [svg-sprite](https://github.com/jkphl/svg-sprite) to generate a symbol spritesheet of SVG icons.

## Installation ##
Run `npm install` first to install all dependencies.

## Generating ##
Separate icons are placed in `src`. Run `npm run build`. The spritesheet can be found in `dist/`. The icon symbols are named after the filename (without extension).

## Usage ##
Icons in the spritesheet can be addressed with `<svg><use xlink:href="/img/icons.svg#home"></use></html>`, where `/img/icons.svg` is the path to the spritesheet, and `home` is the symbol name.
