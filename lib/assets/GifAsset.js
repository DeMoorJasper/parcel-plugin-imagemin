const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminGifsicle = require('imagemin-gifsicle');

class GifAsset extends ImageAsset {
  async packageImage(options, location) {
    const params = options && options.gifsicle ? options.gifsicle : { optimizationLevel: 2 };
    return imagemin([location], {
      plugins: [imageminGifsicle(params)]
    });
  }
}

module.exports = GifAsset;
