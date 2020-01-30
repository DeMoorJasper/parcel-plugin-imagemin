[![Build Status](https://dev.azure.com/DeMoorJasper/parcel-plugin-imagemin/_apis/build/status/DeMoorJasper.parcel-plugin-imagemin?branchName=master)](https://dev.azure.com/DeMoorJasper/parcel-plugin-imagemin/_build/latest?definitionId=4&branchName=master)

# parcel-plugin-imagemin

A parcel plugin for image minification

## Affected image formats

Currently supported extensions are `.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`

## Installation

```bash
yarn add parcel-plugin-imagemin -D
```

or

```bash
npm install parcel-plugin-imagemin -D
```

## Usage

Image minification is only done on production builds so `parcel build ...`, this to improve rebuild speeds in dev mode (the imagemin data is cached so it should be pretty quick in prod as well)

## Configuration

Configuration file used by this plugin is `imagemin.config.js`

```Javascript
module.exports = {
  "gifsicle": { "optimizationLevel": 2, "interlaced": false, "colors": 10 },
  "mozjpeg": { "progressive": true, "quality": 10 },
  "pngquant": { "quality": [0.25, 0.5] },
  "svgo": {
    "plugins": [
      { "removeViewBox": false },
      { "cleanupIDs": true },
    ]
  },
  "webp": { "quality": 10 }
}

```

See imagemin's API for further information: https://github.com/imagemin

## License

MIT License
