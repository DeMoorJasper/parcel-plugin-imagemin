const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');

class SvgAsset extends ImageAsset {
  async packageImage(quality, location) {
    return imagemin([location], {
      plugins: [
        imageminSvgo()
      ]
    });
  }
}

module.exports = SvgAsset;