'use strict';

angular.module('cardistry.main', ['cardistry.cards', 'ngCookies', 'firebase'])

  .controller('MainCtrl', function (Deck, $state, $stateParams, $filter, $rootScope, $cookieStore, $scope, FB) {
  	var gameObject = FB();

		var Game = function(game){
			this.deck = {
				whiteCards: Deck.whiteCards,
				blackCards: Deck.blackCards
			}
			this.finalScore = 10,
			this.turn = {
				number: 0,
				currentDealer: "",
				cardsPlayed: []
			}
			this.players = []
		}
		var game = $scope.game = new Game();
		
		this.firebaseSync = function() {
			gameObject.game = $scope.game
			gameObject.$save()
		}

		this.playCard = function(player, cardId, cardText){
			game.turn.cardsPlayed.push({
							player: this.player.name,	
							cardId: cardId,
							cardText: cardText
						})
			this.firebaseSync();
	}
  	var self = this;

  	this.player = $cookieStore.get('player')

  	var cardPlayer = (this.player, 134, "flying sex snakes")

  	this.addPlayer = function(name) {
			this.name = name
			var player = new Player(name)
			game.players.push(player)
			$cookieStore.put('player', player)
			$state.go('hand');
			this.player = player
			this.firebaseSync();
			this.log()
		}
		this.log = function(){
			console.log(this.player)
		}

		var idCounter = 0;

		var Player = function(name, index){
			this.name = name;
			this.cards = $filter('limitTo')(game.deck.whiteCards, 10);
			this.id = ++idCounter;
			this.score = 0;
			game.deck.whiteCards.splice(index, 10);
		}
	console.log(game)
	$rootScope.game = game
	$rootScope.player = $cookieStore.get('player')
  })

	.controller('PlayerCtrl', function($rootScope, $stateParams, $cookieStore){
		var game = $rootScope.game
		this.player = $cookieStore.get('player')

		// angular.forEach(game.players, function(player, index){
		// 	if(player.id == $stateParams.id) {
		// 		console.log("i fired")
		// 		console.log(player)
		// 		return player
		// 	}
		// })
	})
	.factory('FB', function($firebase){
		return function(gameId){
			var ref = new Firebase("https://cardistry.firebaseio.com/").child('game')

			return $firebase(ref).$asObject();
		}
	})

