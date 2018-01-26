const isNode8 = parseInt(process.versions.node, 10) >= 8 ? true : false;

module.exports = {
  config: isNode8 ? require('parcel-bundler/src/utils/config') : require('parcel-bundler/lib/utils/config'),
  RawPackager: isNode8 ? require('parcel-bundler/src/packagers/RawPackager') : require('parcel-bundler/lib/packagers/RawPackager')
}