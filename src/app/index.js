'use strict';

angular.module('cardistry', ['ui.router', 'firebase','cardistry.cards','cardistry.main', 'angular-gestures'])

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
        controller: "MainCtrl as app",
        onEnter: function(Auth, $modal){
          this.user = ''
          var self = this
          //loading the user to check whether they have the correct number of cards
          Auth.onAuth(function(user){
            self.user = user;
          })
          self.user.$loaded().then(function(){
            if(self.user.hand == null || self.user.hand.length < 10){
              //Put modal code here
              console.log($modal)
              $modal.open({
                templateUrl: 'app/partials/rules.html',
                backdrop: 'static'
              })
            }
          })
        }
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

