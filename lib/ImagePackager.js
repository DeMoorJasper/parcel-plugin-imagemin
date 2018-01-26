// Node requires
const path = require('path');
const url = require('url');
const fs = require('fs');
const imagemin = require('imagemin');

// Parcel requires
const parcelRequires = require('./parcelRequires');
const RawPackager = parcelRequires.RawPackager;
const Config = parcelRequires.config;

class ImagePackager extends RawPackager {
  async packageImage(quality, location) {
    return imagemin([location]);
  }

  async addAsset(asset) {
    let name = this.bundle.name;
    if (asset !== this.bundle.entryAsset) {
      name = url.resolve(
        path.join(path.dirname(this.bundle.name), asset.generateBundleName()),
        ''
      );
    }

    let contents = asset.generated[asset.type];
    let config = await Config.load(asset.name, ['imagemin.config.js']);
    if (!contents || (contents && contents.path)) {
      let quality = config ? config.quality || 100 : 100;
      let location = contents ? contents.path : asset.name;
      let result = await this.packageImage(quality, path.resolve(location));
      if (result[0] && result[0].data) {
        contents = result[0].data;
      }
    }

    await new Promise((resolve, reject) => {
      fs.writeFile(name, contents, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }
}

module.exports = ImagePackager;