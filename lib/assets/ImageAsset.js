const Asset = require('../parcelRequires').Asset;
const path = require('path');
const urlJoin = require('../urlJoin');

class ImageAsset extends Asset {
  constructor(...args) {
    super(...args);

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
    // Don't return a URL to the JS bundle if there is a bundle loader defined for this asset type.
    // This will cause the actual asset to be automatically preloaded prior to the JS bundle running.
    if (this.options.bundleLoaders[this.type]) {
      return {};
    }

    const pathToAsset = urlJoin(this.options.publicURL, this.generateBundleName());

    return [
      {
        type: 'js',
        value: `module.exports=${JSON.stringify(pathToAsset)};`,
        hasDependencies: false
      },
      {
        type: this.type,
        value: this.outputData || this.contents || null,
        hasDependencies: false
      }
    ];
  }
}

module.exports = ImageAsset;
