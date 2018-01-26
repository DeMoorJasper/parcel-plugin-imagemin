// Imagemin
const imagemin = require('imagemin');
const imageminGifsicle = require('imagemin-gifsicle');

// Local requires
const ImagePackager = require('../ImagePackager');

class GifPackager extends ImagePackager {
  async packageImage(quality, location) {
    return imagemin([location], {
      plugins: [
        imageminGifsicle({ optimizationLevel: 2 })
      ]
    });
  }
}

module.exports = GifPackager;