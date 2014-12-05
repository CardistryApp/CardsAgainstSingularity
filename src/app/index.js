'use strict';

angular.module('cardistry', ['ngCookies', 'ngTouch', 'ui.router'])
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
      	controller: 'CardsCtrl'
      })
      .state('invite', {
      	url: '/invite',
      	templateUrl: 'app/partials/invite.html',
      	controller: 'MainCtrl'
      })
      .state('board', {
      	url:'/board',
      	templateUrl: 'app/partials/board.html',
      	controller: 'MainCtrl'
      })

    $urlRouterProvider.otherwise('/lobby');
  })
;
