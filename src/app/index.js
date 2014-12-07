'use strict';

angular.module('cardistry', ['ngCookies', 'ngTouch', 'ui.router', 'firebase',
	'cardistry.cards','cardistry.main'
	])

  // .run(function($rootScope, $state) {
  //   $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
  //     if (error === "AUTH_REQUIRED") {
  //       alert("please log in!")
  //       $state.go("home");
  //     }
  //   })
  // })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "app/partials/home.html",
        controller: "MainCtrl as app"
      })
      .state('account', {
        controller: "MainCtrl as app",
        url: '/account',
        templateUrl: "app/partials/account-page.html",
        // resolve: {
        //   "currentAuth": ["Auth", function(Auth) {
        //     return Auth.$requireAuth();
        //     }]
        //   }
      })
      .state('player', {
        url: '/player',
        templateUrl: "app/partials/player.html"
      })
      .state('czar', {
        url: '/player',
        templateUrl: "app/partials/czar.html"
      })

    $urlRouterProvider.otherwise('/');
  })

