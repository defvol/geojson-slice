const fs = require('fs');
const turfWithin = require('turf-within');
const bboxPolygon = require('turf-bbox-polygon');

/**
 * Return FeatureCollection of points within a defined bounding box
 * @param {object} options passed through the cli
 * @param {function} done callback will pass a FeatureCollection on success
 *
 */
module.exports = function geojsonSlice (options, done) {
  options = options || {};

  fs.readFile(options._[0], (err, data) => {
    if (err) throw err;

    var points = JSON.parse(data);
    var poly = {
      type: 'FeatureCollection',
      features: [
        bboxPolygon(JSON.parse(options.bbox))
      ]
    };
    done(null, turfWithin(points, poly));
  });
}
