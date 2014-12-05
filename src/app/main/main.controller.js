'use strict';

angular.module('cardistry.main', ['cardistry.cards', 'ngCookies'])

  .controller('MainCtrl', function (Deck, $state, $stateParams, $filter, $rootScope, $cookieStore, $scope) {
		// $cookieStore.remove('player')
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
		var game = this.game = new Game();

		this.playCard = function(player, cardId, cardText){
			console.log(game)
			game.turn.cardsPlayed.push({
							player: this.player.name,	
							cardId: cardId,
							cardText: cardText
						})
	}

  	var self = this;

  	this.player = $cookieStore.get('player')

  	this.pageUpdate = function(){
  	};

  	var cardPlayer = (this.player, 134, "flying sex snakes")

  	this.addPlayer = function(name) {
			this.name = name
			var player = new Player(name)
			game.players.push(player)
			// console.log(game)
			$cookieStore.put('playerCookie', player)
			$state.go('hand');
			console.log(game)
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
  })

	// .controller('PlayerCtrl', function($rootScope, $stateParams){
	// 	var game = $rootScope.game

	// 	angular.forEach(game.players, function(player, index){
	// 		if(player.id == $stateParams.id) {
	// 			console.log("i fired")
	// 			console.log(player)
	// 			return player
	// 		}
	// 	})

	// 	console.log(game.players)
	// })

