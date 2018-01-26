const JPG_PACKAGER = './packagers/JpgPackager';
const PNG_PACKAGER = './packagers/PngPackager';
const SVG_PACKAGER = './packagers/SvgPackager';
const GIF_PACKAGER = './packagers/GifPackager';
const IMAGE_PACKAGER = './ImagePackager';

module.exports = function (bundler) {
  bundler.addPackager('jpg', require.resolve(JPG_PACKAGER));
  bundler.addPackager('jpeg', require.resolve(JPG_PACKAGER));
  bundler.addPackager('png', require.resolve(PNG_PACKAGER));
  bundler.addPackager('svg', require.resolve(SVG_PACKAGER));
  bundler.addPackager('gif', require.resolve(GIF_PACKAGER));
};