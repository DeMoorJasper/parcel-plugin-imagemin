const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

class PngAsset extends ImageAsset {
  async packageImage(quality, location) {
    return imagemin([location], {
      plugins: [
        imageminPngquant({ quality })
      ]
    });
  }
}

module.exports = PngAsset;