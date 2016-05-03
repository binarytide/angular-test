
var md5 = require('md5')

module.exports = function($scope, artists) {

  $scope.artists = artists.list
  $scope.order = 'name'

}
