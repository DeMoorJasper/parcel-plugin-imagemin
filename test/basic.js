const assert = require('assert');
const { setupBundler } = require('./utils');
const assertBundleTree = require('parcel-assert-bundle-tree');
const path = require('path');
const fs = require('fs')

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
          type: 'png'
        },
        {
          type: 'jpeg'
        },
        {
          type: 'svg'
        }
      ]
    });

    // TODO: Test params
  });
});