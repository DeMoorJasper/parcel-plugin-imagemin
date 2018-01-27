const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminGifsicle = require('imagemin-gifsicle');

class GifAsset extends ImageAsset {
  async packageImage(quality, location) {
    return imagemin([location], {
      plugins: [
        imageminGifsicle({ optimizationLevel: 2 })
      ]
    });
  }
}

module.exports = GifAsset;