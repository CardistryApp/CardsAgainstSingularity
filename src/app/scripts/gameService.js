'use strict';

angular.module('cardistry.game', ['cardistry.players', 'cardistry.game', 'firebase'] )
	
	.constant('FIREBASE_URL', 'https://cardistry.firebaseio.com/game')

	.factory('Game', function($firebase, FIREBASE_URL, $stateParams){
		var ref = new Firebase(FIREBASE_URL);

		var sync = $firebase(ref.child('game'));

		var game = sync.$asObject();

		return {
			addPlayer: function addPlayer(player){
				// Add a player to the game...
				// Save the game...
			}
		};
	})
	.service('Game', function($firebase, FIREBASE_URL, $stateParams){
		var aref = '/players'
		var ref = new Firebase(FIREBASE_URL + aref);
		var sync = $firebase(ref);

		var self = this;
		this.players = sync.$asArray();
		this.addPlayers = function(player) {
			self.players.$add({
				'name': player.name,
				'id': player.id	,
				'cards': player.cards,
				'score': player.score,
				'dealer': false
			})
		}
		return this;
	})

	.controller('GameCtrl', function(Players, $stateParams, $state, Game, $scope, $firebase)	{

		var ref = new Firebase('https://cardistry.firebaseio.com');
		var sync = $firebase(ref);
		var game = sync.$asObject();

		this.addPlayer = function(name) {
			var player = Players.createPlayer(name);
			Game.addPlayers(player);
			// Try `game.$save().then()
			game.$save().then(function(ref){
				$state.go('id', {id: player.id})	
			})
		}
	})

	