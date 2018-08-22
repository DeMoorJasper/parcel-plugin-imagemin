module.exports = {
  "gifsicle": { "optimizationLevel": 2, "interlaced": false, "colors": 10 },
  "mozjpeg": { "progressive": true, "quality": 10 },
  "pngquant": { "quality": 10 },
  "svgo": {
    "plugins": [
      { "removeViewBox": false },
      { "cleanupIDs": true },
    ]
  },
  "webp": { "quality": 10 }
}
