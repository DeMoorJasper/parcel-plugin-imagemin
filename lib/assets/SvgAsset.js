const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');

class SvgAsset extends ImageAsset {
  async packageImage(options, location) {
    const params = options && options.svgo ? options.svgo : {};
    return imagemin([location], {
      plugins: [imageminSvgo(params)]
    });
  }
}

module.exports = SvgAsset;
