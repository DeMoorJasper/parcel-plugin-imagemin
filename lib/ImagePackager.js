// Node requires
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// Parcel requires
const parcelRequires = require('./parcelRequires');
const RawPackager = parcelRequires.RawPackager;

class ImagePackager extends RawPackager {
  async addAsset(asset) {
    let name = this.bundle.name;
    let contents = asset.generated.image;

    if (!contents) {
      throw new Error('Image buffer is undefined.');
    }

    if (contents.type === 'Buffer') {
      contents = Buffer.from(contents.data);
    }

    if (asset.relativeName.includes(path.sep)) {
      await mkdirp(path.dirname(name));
    }


    await new Promise((resolve, reject) => {
      fs.writeFile(name, contents, (err) => {
        if (err) {
          console.log("Tried writing to", name)
          console.error(err)
          return reject(err);
        }
        return resolve();
      });
    });

    this.size = contents.length ? contents.length : 0;
  }
}

module.exports = ImagePackager;