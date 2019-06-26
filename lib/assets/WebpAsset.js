const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

class WebpAsset extends ImageAsset {
  async packageImage(options, location) {
    const params = options && options.webp ? options.webp : { quality: 75 };
    return imagemin([location], {
      plugins: [imageminWebp(params)]
    });
  }
}

module.exports = WebpAsset;
