'use strict';

angular.module('cardistry', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('lobby', {
        url: '/lobby',
        templateUrl: "app/partials/lobby.html",
        controller: 'MainCtrl'
      })
      .state('lobby.players', {
      	url: '/players',
      	templateUrl: "app/partials/lobby-players.html",
      	controller: 'MainCtrl'
      })
      .state('lobby.rules', {
      	url: '/rules',
      	templateUrl: "app/partials/lobby-rules.html",
      	controller: 'MainCtrl'
      })
      .state('lobby.invite', {
      	url: '/invite',
      	templateUrl: "app/partials/lobby-invite.html",
      	controller: 'MainCtrl'
      })
      .state('player', {
      	url: '/player',
      	templateUrl: 'app/partials/player.html',
      	controller: 'MainCtrl'
      })

    $urlRouterProvider.otherwise('/');
  })
;
