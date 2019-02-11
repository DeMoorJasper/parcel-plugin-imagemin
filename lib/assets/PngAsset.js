const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

class PngAsset extends ImageAsset {
  async packageImage(options, location) {
    const params = options && options.pngquant ? options.pngquant : { quality: 100 };
    return imagemin([location], {
      plugins: [imageminPngquant(params)]
    });
  }
}

module.exports = PngAsset;
