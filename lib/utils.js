var fs = require('fs');

/**
 * Get usage instructions
 * @return {String} the instructions to run this thing
 */
module.exports.usage = function () {
  var u = [];
  u.push('Slice GeoJSON features from the command line');
  u.push('usage: geojsonSlice [options] [file.geojson]');
  u.push('');
  u.push(' --bbox to filter out features, e.g. [-118,22,-109,32]');
  u.push(' --help prints this message');
  u.push(' --version prints package version');
  u.push('');
  return u.join('\n');
};

/**
 * Get module version from the package.json file
 * @return {String} version number
 */
module.exports.version = function () {
  var data = fs.readFileSync(__dirname + '/../package.json');
  return JSON.parse(data).version;
};
