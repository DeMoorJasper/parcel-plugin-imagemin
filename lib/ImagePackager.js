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
  async addAsset(asset) {
    let name = this.bundle.name;
    let contents = asset.generated.image;
    if (contents && contents.type === 'Buffer') {
      contents = Buffer.from(contents.data);
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