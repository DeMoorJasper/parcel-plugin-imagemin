// Imagemin
const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');

// Local requires
const ImagePackager = require('../ImagePackager');

class SvgPackager extends ImagePackager {
  async packageImage(quality, location) {
    return imagemin([location], {
      plugins: [
        imageminSvgo()
      ]
    });
  }
}

module.exports = SvgPackager;