'use strict';

angular.module('cardistry.game', ['cardistry.players', 'cardistry.game', 'firebase'] )
	
	.constant('FIREBASE_URL', 'https://cardistry.firebaseio.com/game')

	.service('Game', function($firebase, FIREBASE_URL, $stateParams){
		var aref = '/players'
		var ref = new Firebase(FIREBASE_URL + aref);
		var sync = $firebase(ref);

		var self = this;
		this.players = sync.$asArray();
		this.addPlayers = function(player) {
			self.players.$add({
				'name': player.name,
				'id': player.id,
				'cards': player.cards,
				'score': player.score,
				'dealer': false
			})
		}
		return this;
	})

	.controller('GameCtrl', function(Players, $stateParams, $state, Game, $scope, $firebase)	{

		var ref = new Firebase('https://cardistry.firebaseio.com/game' );
		var sync = $firebase(ref);
		var obj = sync.$asObject();
		$scope.list = sync.$asArray();
		obj.$bindTo($scope, 'players')


		$scope.addPlayer = function(name) {
			this.name = $('#playerName').val()
			var player = Players.createPlayer(this.name);
			Game.addPlayers(player);
			ref.child('playerCount').transaction(function(currentValue){
				return(currentValue || 0) +1
			});
			setTimeout(function(){
				$state.go('id', {id: player.id})
			}, 50)
		}
	})

	