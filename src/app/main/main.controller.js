'use strict';

angular.module('cardistry.main', ['cardistry.cards'])

  .controller('MainCtrl', function (Deck, $state, $stateParams, $filter) {
		
		var Game = function(game){
			this.deck = Deck.deck,
			this.deck.whiteCards = Deck.whiteCards,
			this.deck.blackCards = Deck.blackCards,
			this.finalScore = 10,
			this.playedCards = {},
			this.currentDealer = ""
			this.players = []
		}
		var game = new Game();

  	var self = this;

  	this.player = {}

  	this.pageUpdate = function(){
  		game.players.forEach(function(player, index){
				if(player.id === index + 1) {
					console.log("i fired")
					return self.player = player
				}
			})
  	};

  	this.addPlayer = function(name) {
			this.name = name
			var player = new Player(name)
			game.players.push(player)
			console.log(game)
			this.pageUpdate();
			$state.go('id', {id: player.id});
		}

		var idCounter = 0;

		var Player = function(name, index){
			this.name = name;
			this.cards = $filter('limitTo')(game.deck.whiteCards, 10);
			this.id = ++idCounter;
			this.score = 0;
			game.deck.whiteCards.splice(index, 10);
		}
  })

