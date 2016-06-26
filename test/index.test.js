var geojsonSlice = require('../lib/index');
var test = require('tape');

test('geojsonSlice', function (t) {
  t.plan(5);

  geojsonSlice({
    _: [__dirname + '/points.geojson'],
    bbox: '[-107.97,17.26,-102.04,22.63]'
  }, function (err, data) {
    t.equal(data.features.length, 1, 'found 1 feature');
    t.equal(data.features[0].properties.place, 'Sayulita', 'found the beach');
  });

  geojsonSlice({
    _: [__dirname + '/points.geojson'],
    bbox: '[-124,12,-76,35]'
  }, function (err, data) {
    t.equal(data.features.length, 2, 'found 2 features');
    t.equal(data.features[0].properties.place, 'San Felipe', 'found the port');
    t.equal(data.features[1].properties.place, 'Sayulita', 'found the beach');
  });

});
