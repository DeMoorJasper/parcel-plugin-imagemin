// Imagemin
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

// Local requires
const ImagePackager = require('../ImagePackager');

class PngPackager extends ImagePackager {
  async packageImage(quality, location) {
    return imagemin([location], {
      plugins: [
        imageminPngquant({ quality })
      ]
    });
  }
}

module.exports = PngPackager;