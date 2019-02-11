const IMAGE_PACKAGER = './ImagePackager';

const JPG_ASSET = './assets/JpgAsset';
const PNG_ASSET = './assets/PngAsset';
const SVG_ASSET = './assets/SvgAsset';
const GIF_ASSET = './assets/GifAsset';
const WEBP_ASSET = './assets/WebpAsset';

module.exports = function(bundler) {
  // Assets
  bundler.addAssetType('jpg', require.resolve(JPG_ASSET));
  bundler.addAssetType('jpeg', require.resolve(JPG_ASSET));
  bundler.addAssetType('png', require.resolve(PNG_ASSET));
  bundler.addAssetType('svg', require.resolve(SVG_ASSET));
  bundler.addAssetType('gif', require.resolve(GIF_ASSET));
  bundler.addAssetType('webp', require.resolve(WEBP_ASSET));

  // Packagers
  bundler.addPackager('jpg', require.resolve(IMAGE_PACKAGER));
  bundler.addPackager('jpeg', require.resolve(IMAGE_PACKAGER));
  bundler.addPackager('png', require.resolve(IMAGE_PACKAGER));
  bundler.addPackager('svg', require.resolve(IMAGE_PACKAGER));
  bundler.addPackager('gif', require.resolve(IMAGE_PACKAGER));
  bundler.addPackager('webp', require.resolve(IMAGE_PACKAGER));
};
