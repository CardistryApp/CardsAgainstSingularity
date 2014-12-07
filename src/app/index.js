'use strict';

angular.module('cardistry', ['ngCookies', 'ngTouch', 'ui.router', 'firebase',
	'cardistry.cards','cardistry.main'
	])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "app/partials/home.html"
      })
      .state('account', {
        url: '/account',
        templateUrl: "app/partials/account-page.html"
      })
      .state('player', {
        url: '/player',
        templateUrl: "app/partials/player.html"
      })
      .state('czar', {
        url: '/player',
        templateUrl: "app/partials/czar.html"
      })

      .state('about', {
        url: '/about',
        templateUrl: "app/partials/about.html"
      })

    $urlRouterProvider.otherwise('/');
  })

