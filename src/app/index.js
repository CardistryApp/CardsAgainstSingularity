'use strict';

angular.module('cardistry', ['ui.router', 'firebase','cardistry.cards','cardistry.main'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: "app/partials/login.html",
        controller: "loginPageCtrl as login"
      })
      .state('home', {
        url: '/home',
        templateUrl: "app/partials/home.html",
        controller: "MainCtrl as app"
      })
      .state('player', {
        url: '/player',
        templateUrl: "app/partials/player.html",
        controller: "PlayerCtrl as players"
      })
      .state('czar', {
        url: '/czar',
        templateUrl: "app/partials/czar.html",
        controller: "PlayerCtrl as players"
      })
      .state('about', {
        url: '/about',
        templateUrl: "app/partials/about.html"
      })
    $urlRouterProvider.otherwise('/');
  });

