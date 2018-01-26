// Imagemin
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

// Local requires
const ImagePackager = require('../ImagePackager');

class JpgPackager extends ImagePackager {
  async packageImage(quality, location) {
    return imagemin([location], {
      plugins: [
        imageminMozjpeg({ quality })
      ]
    });
  }
}

module.exports = JpgPackager;