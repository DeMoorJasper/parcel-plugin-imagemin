// Node requires
const fs = require('fs-extra');

// Parcel requires
const parcelRequires = require('./parcelRequires');
const Packager = parcelRequires.Packager;

class ImagePackager extends Packager {
  static shouldAddAsset() {
    // We cannot combine multiple raw assets together - they should be written as separate bundles.
    return false;
  }

  // Override so we don't create a file for this bundle.
  // Each asset will be emitted as a separate file instead.
  setup() {}

  async addAsset(asset) {
    let name = this.bundle.name;
    let contents = asset.generated[this.bundle.type];

    if (!contents) {
      try {
        contents = await fs.readFile(asset.name);
      } catch (e) {
        throw new Error(`Image buffer is undefined for ${asset.relativeName}`);
      }
    }

    if (contents.type === 'Buffer') {
      contents = Buffer.from(contents.data);
    }

    await fs.outputFile(name, contents);

    this.size = contents.length ? contents.length : 0;
  }

  getSize() {
    return this.size || 0;
  }

  end() {}
}

module.exports = ImagePackager;
