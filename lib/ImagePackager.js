// Node requires
const fs = require('fs-extra');

// Parcel requires
const parcelRequires = require('./parcelRequires');
const RawPackager = parcelRequires.RawPackager;

class ImagePackager extends RawPackager {
  async addAsset(asset) {
    let name = this.bundle.name;
    let contents = asset.generated.image;

    if (!contents) {
      throw new Error(`Image buffer is undefined for ${asset.relativeName}`);
    }

    if (contents.type === 'Buffer') {
      contents = Buffer.from(contents.data);
    }

    await fs.outputFile(name, contents)

    this.size = contents.length ? contents.length : 0;
  }
}

module.exports = ImagePackager;
