const path = require('path');
const parcelRoot = parseInt(process.versions.node, 10) >= 8 ? 'parcel-bundler/src/' : 'parcel-bundler/lib/';

module.exports = {
  config: require(path.join(parcelRoot, 'utils/config')),
  RawPackager: require(path.join(parcelRoot, 'packagers/RawPackager'))
};