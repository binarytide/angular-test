module.exports = function($scope, $routeParams, artists) {
  $scope.whichItem = $routeParams.item_id
  $scope.artists = artists.list

  console.log('item id: ' + $routeParams.item_id )
}
