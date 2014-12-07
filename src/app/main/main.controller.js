'use strict';

angular.module('cardistry.main', ['cardistry.cards', 'ngCookies', 'firebase'])

  .controller('MainCtrl', function (Deck, $state, $stateParams, $filter, $rootScope, $cookieStore, $scope, FBobj, Game) {

  	$('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
		})

  	var gameObject = FBobj();
  	console.log(gameObject)

  	this.fbPlayList = function(){
  		console.log(gameObject.game.players)
  	}

		var game = gameObject.game = new Game();
		$cookieStore.put('game', game)
		gameObject.game = $cookieStore.get('game')
		gameObject.$save()

		this.firebaseSync = function() {
			console.log("saved")
			gameObject.$save()
		}
		this.syncUp = function(){
			this.firebaseSync();
			$state.go('player');
		}
		this.playCard = function(player, cardId, cardText, index){
			game.turn.cardsPlayed.push({
							player: $rootScope.player.name,	
							cardId: cardId,
							cardText: cardText
						})
			$rootScope.player.cards.splice(index, 1);
			$('li#'+index).remove();
			gameObject.game = $scope.game
			console.log(game)
			this.firebaseSync();
	}
  	var self = this;

  	// this.player = $cookieStore.get('player')

  	this.addPlayer = function(name) {
			self.name = name
			var player = new Player(name)
			game.players.push(player)
			// $cookieStore.put('player', player)
			$state.go('hand', {id: player.id});
			$rootScope.player = player
			gameObject.$save()
			return false
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
	
	$rootScope.game = game
  })

	.controller('PlayerCtrl', function($rootScope, $stateParams, $cookieStore){
		this.game = $rootScope.game
		console.log(this.game)
		this.player = $rootScope.player
	})

	.factory('FBobj', function($firebase){
		return function(gameId){
			var ref = new Firebase("https://cardistry.firebaseio.com/").child('games')
			return $firebase(ref).$asObject();
		}
	})

	.factory('Game', function(Deck){
		return function(){
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
	});

