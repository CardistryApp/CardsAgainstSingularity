"use strict";angular.module("cardistry",["ngCookies","ngTouch","ui.router","firebase","cardistry.cards","cardistry.players","cardistry.game","cardistry.main"]).config(["$stateProvider","$urlRouterProvider",function(a,r){a.state("lobby",{url:"/lobby",templateUrl:"app/partials/lobby.html",controller:"MainCtrl"}).state("lobby.players",{url:"/players",templateUrl:"app/partials/lobby-players.html",controller:"MainCtrl"}).state("lobby.rules",{url:"/rules",templateUrl:"app/partials/lobby-rules.html",controller:"MainCtrl"}).state("lobby.invite",{url:"/invite",templateUrl:"app/partials/lobby-invite.html",controller:"MainCtrl"}).state("player",{url:"/player",templateUrl:"app/partials/player.html",controller:"GameCtrl as game"}).state("id",{url:"/player/:id",templateUrl:"app/partials/player-cards.html",controller:"PlayerCtrl as players"}).state("board",{url:"/board",templateUrl:"app/partials/board.html",controller:"MainCtrl"}),r.otherwise("/lobby")}]),angular.module("cardistry.main",[]).controller("MainCtrl",["$scope",function(a){a.sendText=function(r){var e="ACf58e41a4fd0ab11312a28e2b43d573d4",t="1fa9bb818461cd57a5b322848ee28aa4",l=require("twilio")(e,t);l.messages.create({to:r,from:"+14582022737",body:"Trial because the developers of this app are too damn cheap to pay for anything.                 Anyway follow me to play a game of cards. http://www.cardistryApp.com/03r2jrmflkm3/lobby "},function(a,r){console.log(r.sid)}),a.phoneNum=""}}]),angular.module("cardistry.cards",[]).service("Deck",["$http",function(a){this.deck=[],this.whiteCards=[],this.blackCards=[];var r=this;a.get("/assets/data/cards.JSON").then(function(a){angular.forEach(a.data,function(a){"A"===a.cardType?r.whiteCards.push(a):"Q"===a.cardType&&r.blackCards.push(a)}),r.deck=a.data,e(r.whiteCards),e(r.blackCards)});var e=function(a){for(var r,e,t=a.length;t;)e=Math.floor(Math.random()*t--),r=a[t],a[t]=a[e],a[e]=r;return a}}]),angular.module("cardistry.players",["cardistry.cards","cardistry.game","firebase"]).factory("Players",["$filter","Deck","$state","$firebase",function(a,r){var e={};e.createPlayer=function(a){var r=new l(a);return r};var t=0,l=function(e,l){this.name=e,this.cards=a("limitTo")(r.whiteCards,10),this.id=++t,this.score=0,r.whiteCards.splice(l,10)};return e}]).controller("PlayerCtrl",["Game","$stateParams","$scope",function(a,r){var e=this;angular.forEach(a.players,function(a){return a.id==r.id&&(e.value=a),a})}]),angular.module("cardistry.game",["cardistry.players","cardistry.game","firebase"]).constant("FIREBASE_URL","https://cardistry.firebaseio.com").service("Game",["$firebase","FIREBASE_URL","$stateParams",function(a,r,e){var t=new Firebase(r),l=a(t),s=this;return this.players=l.$asArray(),this.addPlayers=function(a){s.players.$add({name:a.name,id:a.id,cards:a.cards,score:a.score,dealer:!1})},this.loadData=function(){angular.forEach(s.players,function(a){return a.id==e.id&&(s.value=a),console.log(a),a})},this}]).controller("GameCtrl",["Players","$stateParams","$state","Game","$scope","$firebase",function(a,r,e,t,l,s){var n=new Firebase("https://cardistry.firebaseio.com/players"),i=s(n),o=i.$asObject();l.list=i.$asArray(),l.list.$loaded().then(function(){console.log("list as "+l.list.length+" item(s)")}),console.log(l),o.$bindTo(l,"players"),l.addPlayer=function(){this.name=$("#playerName").val();var r=a.createPlayer(this.name);t.addPlayers(r),t.loadData(),setTimeout(function(){e.go("id",{id:r.id})},50)}}])(function(a){try{a=angular.module("cardistry")}catch(r){a=angular.module("cardistry",[])}a.run(["$templateCache",function(a){a.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></nav>')}])})(),function(a){try{a=angular.module("cardistry")}catch(r){a=angular.module("cardistry",[])}a.run(["$templateCache",function(a){a.put("app/partials/board.html","<!DOCTYPE><html><head></head><body><div></div></body></html>")}])}(),function(a){try{a=angular.module("cardistry")}catch(r){a=angular.module("cardistry",[])}a.run(["$templateCache",function(a){a.put("app/partials/lobby-invite.html",'<form ng-submit="sendText(phoneNum)"><fieldset class="form-group"><button class="btn btn-primary" type="submit">Click here to invite your friends!</button> <input id="phoneNum" type="tel" placeholder="555-555-5555" ng-model="phoneNum" class="form-control"></fieldset></form>')}])}(),function(a){try{a=angular.module("cardistry")}catch(r){a=angular.module("cardistry",[])}a.run(["$templateCache",function(a){a.put("app/partials/lobby-players.html",'<ul id="playerList"><li ng-repeat="player in app.Players">{{player.name}}</li></ul>')}])}(),function(a){try{a=angular.module("cardistry")}catch(r){a=angular.module("cardistry",[])}a.run(["$templateCache",function(a){a.put("app/partials/lobby-rules.html",'<p>To start the game, each player draws ten white "answer" cards. One randomly chosen player begins as the Card Czar, and plays a black "question" card. The Card Czar reads the question out to the group. Each player answers the question by passing one white "answer" card, face down, to the Card Czar. The Card Czar shuffles all of the answers, reads them out loud in a humorous fashion, and picks their favorite. Whoever played that answer gets to keep the Black Card as one Awesome Point. After each round, a new player becomes the Card Czar, and every player draws back up to ten cards.</p>')}])}(),function(a){try{a=angular.module("cardistry")}catch(r){a=angular.module("cardistry",[])}a.run(["$templateCache",function(a){a.put("app/partials/lobby.html",'<div id="lobby" class="containr"><h1>Game Lobby</h1><ul class="col-md-4"><li><h1><a ui-sref="lobby.players">Players</a></h1></li><li><h1><a ui-sref="lobby.rules">Game Rules</a></h1></li><li><h1><a ui-sref="lobby.invite">Invite Friends</a></h1></li></ul><div class="col-md-8" ui-view=""></div></div>')}])}(),function(a){try{a=angular.module("cardistry")}catch(r){a=angular.module("cardistry",[])}a.run(["$templateCache",function(a){a.put("app/partials/player-cards.html",'<div><h3>Yo, {{players.value.name}}</h3><ul><li ng-repeat="card in players.value.cards">{{card.text}}</li></ul></div>')}])}(),function(a){try{a=angular.module("cardistry")}catch(r){a=angular.module("cardistry",[])}a.run(["$templateCache",function(a){a.put("app/partials/player.html",'<form id="playerSignIn" ng-submit="addPlayer(name)"><input id="playerName" type="text" class="form-control" ng-model="player.name" placeholder="Your Name"> <button class="btn btn-primary" type="submit">Let\'s Play!</button></form>')}])}();