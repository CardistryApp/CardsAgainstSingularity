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
			gameObject.$save()
		}
		this.syncUp = function(){
			this.firebaseSync();
			$state.go('player');
		}
		this.playCard = function(player, cardId, cardText, index){
			game.turn.cardsPlayed.push({
							player: this.player.name,	
							cardId: cardId,
							cardText: cardText
						})
			this.player.cards.splice(index, 1);
			$('li#'+index).remove();
			console.log(index)
			gameObject.game = $scope.game
			this.firebaseSync();
	}
  	var self = this;

  	this.player = $cookieStore.get('player')

  	this.addPlayer = function(name) {
			this.name = name
			var player = new Player(name)
			game.players.push(player)
			$cookieStore.put('player', player)
			$state.go('hand');
			this.player = player
			gameObject.game = $scope.game
			this.firebaseSync();
		}
		this.log = function(){
			console.log(this.player)
		}

		var Player = function(name, index){
			this.name = name;
			this.cards = $filter('limitTo')(game.deck.whiteCards, 10);
			this.id = game.players.length + 1;
			this.score = 0;
			game.deck.whiteCards.splice(index, 10);
		}
	console.log(game)
	$rootScope.game = game
	$rootScope.player = $cookieStore.get('player')
  })

	.controller('PlayerCtrl', function($rootScope, $stateParams, $cookieStore){
		this.player = $cookieStore.get('player')
	})

	.factory('FB', function($firebase){
		return function(gameId){
			var ref = new Firebase("https://cardistry.firebaseio.com/").child('games')

			return $firebase(ref).$asObject();
		}
	});

