const path = require('path');

function getParcel() {
  try {
    require('parcel');
    return 'parcel';
  } catch(e) {
    return 'parcel-bundler';
  }
}

const parcelRoot = parseInt(process.versions.node, 10) >= 8 ? `${getParcel()}/src/` : `${getParcel()}/lib/`;

module.exports = {
  config: require(path.join(parcelRoot, 'utils/config')),
  RawPackager: require(path.join(parcelRoot, 'packagers/RawPackager')),
  Asset: require(getParcel()).Asset
};