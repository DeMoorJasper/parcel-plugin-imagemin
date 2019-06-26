const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

class JpgAsset extends ImageAsset {
  async packageImage(options, location) {
    const params = options && options.mozjpeg ? options.mozjpeg : { quality: 75 };
    return imagemin([location], {
      plugins: [imageminMozjpeg(params)]
    });
  }
}

module.exports = JpgAsset;
