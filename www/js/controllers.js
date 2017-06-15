angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicPopover) {
      $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
      }).then(function(popover) {
        $scope.popover = popover;
      });
})

.controller('PlaylistsCtrl', function($scope, $http, PlaylistsService) {
    $scope.searchKey = "";

    $scope.clearSearch = function () {
         $scope.searchKey = "";
         PlaylistsService.findAll();
    }

    $scope.search = function () {
        PlaylistsService.findByName($scope.searchKey).then(function (playlists) {
            $scope.playlists = playlists;
        });
    }
    
    PlaylistsService.findInitial().then(function(playlists) {
        $scope.playlists = playlists;
    });
    
    $scope.doRefresh = function() {
        PlaylistsService.findAll().then(function(playlists) {
            $scope.playlists = playlists;
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('PlaylistCtrl', function($scope, $stateParams,PlaylistsService) {
    console.log($stateParams.playlistId);
    $scope.playingIndex = -1;
    PlaylistsService.findById($stateParams.playlistId).then(function(playlist) {
        $scope.playlist = playlist;
    });
    $scope.playMp3 = function($index){
        if($scope.playingIndex<0){
            $scope.playingIndex = $index;
            $scope.my_media = new Media($scope.getMediaURL("mp3/septemberends.mp3"), function(){}, function(){});
            $scope.my_media.play();

        }else if ($scope.playingIndex==$index){
            $scope.my_media.stop();
            $scope.playingIndex = -1;
        }
    }
    $scope.$on("$destroy", function(){
        $scope.my_media.stop();
    });
    $scope.getMediaURL = function(s) {
        if(device.platform.toLowerCase() === "android"){ return "/android_asset/www/" + s;}
        return s;
    }
});
