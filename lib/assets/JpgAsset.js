const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

class JpgAsset extends ImageAsset {
  async packageImage(quality, location) {
    return imagemin([location], {
      plugins: [
        imageminMozjpeg({ quality })
      ]
    });
  }
}

module.exports = JpgAsset;