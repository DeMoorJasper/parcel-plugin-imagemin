module.exports = function (bundler) {
  bundler.addPackager('jpg', require.resolve('./ImagePackager'));
  bundler.addPackager('jpeg', require.resolve('./ImagePackager'));
  bundler.addPackager('png', require.resolve('./ImagePackager'));
  bundler.addPackager('svg', require.resolve('./ImagePackager'));
  bundler.addPackager('gif', require.resolve('./ImagePackager'));
};