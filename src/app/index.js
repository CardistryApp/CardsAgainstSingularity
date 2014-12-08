'use strict';

<<<<<<< HEAD
angular.module('cardistry', ['ui.router', 'firebase', 'cardistry.cards','cardistry.main'])
=======
angular.module('cardistry', ['ui.router', 'firebase','cardistry.cards','cardistry.main'
	])
>>>>>>> ead4a54d8e9a4941709c7ac0fbabe69f2147a29a

  .run(function($rootScope, $state) {
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
      if (error === "AUTH_REQUIRED") {
        alert("please log in!")
        $state.go("home");
      }
    })
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "app/partials/home.html",
        controller: "loginPageCtrl as login"
      })
      .state('account', {
        controller: "MainCtrl as app",
        url: '/account',
        templateUrl: "app/partials/account-page.html"
      })
      .state('player', {
        controller: "PlayerCtrl as players",
        url: '/player',
        templateUrl: "app/partials/player.html",
        resolve: {
          Deck: "Deck"
        }
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
  });

