const Asset = require('../parcelRequires').Asset;
const path = require('path');

class ImageAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.encoding = null;
  }

  async packageImage(options, location) {
    return imagemin([location]);
  }

  async transform() {
    if (this.options.minify) {
      let config = await this.getConfig(['imagemin.config.js'], {
        packageKey: 'imagemin'
      });

      let result = await this.packageImage(config, path.resolve(this.name));
      if (result[0] && result[0].data) {
        this.outputData = result[0].data;
      }
    }
  }

  generate() {
    return {
      image: this.outputData || this.contents
    }
  }
}

module.exports = ImageAsset;