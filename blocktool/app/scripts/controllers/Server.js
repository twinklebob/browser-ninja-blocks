'use strict';

blocktoolApp.controller('ServerCtrl',
  ['$scope', 'Config', 'UIEvents', 'ServerService'
  , function($scope, Config, UIEvents, ServerService) {
  

    $scope.Servers = [
      { name: 'Localhost', id: 'localhost'},
      { name: 'Production', id: 'production'}
    ];

    /**
     * Select the specified server
     * @param {[type]} server [description]
     */
    $scope.SelectServer = function(server) {
      ServerService.SetServer(server);
    };

    /**
     * Check if the specified server is selected
     * @param {[type]} server [description]
     */
    $scope.IsSelected = function(server) {
      return (ServerService.Current.Id === server);
    };

}]);
