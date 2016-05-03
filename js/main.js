(function () {

  // 'use strict'

  require('angular')


  var listController = require('./controllers/list')
  var detailController = require('./controllers/details')
  var artistsService = require('./services/artists')

  angular.module('myApp', [require('angular-route')])

  .config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/list', {
      templateUrl: 'partials/list.html',
      controller: 'ListController'
    }).
    when('/details/:item_id', {
      templateUrl: 'partials/details.html',
      controller: 'DetailController'
    }).
    otherwise({
      redirectTo: '/list'
    })
  }])

  .service('artists', [artistsService])
  .controller('ListController', ['$scope', 'artists', listController])
  .controller('DetailController', ['$scope', '$routeParams', 'artists', detailController])

}())
