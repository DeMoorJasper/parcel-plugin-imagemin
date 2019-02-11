const assert = require('assert');
const { setupBundler } = require('./utils');
const assertBundleTree = require('parcel-assert-bundle-tree');
const path = require('path');
const fs = require('fs-extra');

describe('basic', function() {
  it('Should create a basic imagemin bundle', async function() {
    this.timeout(0);
    const bundler = await setupBundler(path.join(__dirname, './Integration/Basic/index.html'), {
      production: true
    });
    const bundle = await bundler.bundle();

    assertBundleTree(bundle, {
      name: 'index.html',
      assets: ['index.html'],
      childBundles: [
        {
          type: 'gif'
        },
        {
          type: 'jpeg'
        },
        {
          type: 'svg'
        },
        {
          type: 'jpg'
        },
        {
          type: 'webp'
        },
        {
          type: 'js',
          childBundles: [
            {
              type: 'png'
            },
            {
              type: 'map'
            }
          ]
        }
      ]
    });

    let originalSvgContent = await fs.readFile(path.join(__dirname, './Integration/Basic/image4.svg'), 'utf8');
    let svgOutput = await fs.readFile(
      Array.from(bundle.childBundles.values()).find(value => value.type === 'svg').name,
      'utf8'
    );
    assert(originalSvgContent.includes('id="SVGID_1_"'));
    assert(originalSvgContent.includes('viewBox'));
    assert(!svgOutput.includes('id="SVGID_1_"'));
    assert(svgOutput.includes('viewBox'));

    let originalPngImage = await fs.readFile(path.join(__dirname, './Integration/Basic/image2.png'));
    let jsBundle = Array.from(bundle.childBundles.values()).find(value => value.type === 'js');
    let minifiedPngImage = await fs.readFile(
      Array.from(jsBundle.childBundles.values()).find(value => value.type === 'png').name
    );
    assert(originalPngImage.byteLength > minifiedPngImage.byteLength);

    let originalJpegImage = await fs.readFile(path.join(__dirname, './Integration/Basic/image3.jpeg'));
    let minifiedJpegImage = await fs.readFile(
      Array.from(bundle.childBundles.values()).find(value => value.type === 'jpeg').name
    );
    assert(originalJpegImage.byteLength > minifiedJpegImage.byteLength);

    let originalGifImage = await fs.readFile(path.join(__dirname, './Integration/Basic/image1.gif'));
    let minifiedGifImage = await fs.readFile(
      Array.from(bundle.childBundles.values()).find(value => value.type === 'gif').name
    );
    assert(originalGifImage.byteLength > minifiedGifImage.byteLength);

    let originalJpgImage = await fs.readFile(path.join(__dirname, './Integration/Basic/images/image5.jpg'));
    let minifiedJpgImage = await fs.readFile(
      Array.from(bundle.childBundles.values()).find(value => value.type === 'jpg').name
    );
    assert(originalJpgImage.byteLength > minifiedJpgImage.byteLength);

    let originalWebpImage = await fs.readFile(path.join(__dirname, './Integration/Basic/image6.webp'));
    let minifiedWebpImage = await fs.readFile(
      Array.from(bundle.childBundles.values()).find(value => value.type === 'webp').name
    );
    assert(originalWebpImage.byteLength > minifiedWebpImage.byteLength);
  });

  it('Should work in development', async function() {
    this.timeout(0);
    const bundler = await setupBundler(path.join(__dirname, './Integration/Basic/index.html'), {
      production: false
    });
    await bundler.bundle();
  });
});
