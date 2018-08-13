// Node requires
const fs = require('fs');

// Parcel requires
const parcelRequires = require('./parcelRequires');
const RawPackager = parcelRequires.RawPackager;

class ImagePackager extends RawPackager {
  async addAsset(asset) {
    let name = this.bundle.name;
    let contents = asset.generated.image;
    if (contents) {
      if (contents.type === 'Buffer') {
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
  
      this.size = contents.length ? contents.length : 0;
    } else {
      throw new Error('Image buffer is undefined.');
    }
  }
}

module.exports = ImagePackager;