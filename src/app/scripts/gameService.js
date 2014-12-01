'use strict';

angular.module('cardistry.game', ['cardistry.players', 'cardistry.game'] )

	.service('playerList', function(){
		self = this;
		this.players = [];
		this.addPlayers = function(player) {
			self.players.push({
				'name': player.name,
				'id': player.id,
				'cards': player.cards
			})
		}
		return this;
	})

	.controller('GameCtrl', function($scope, Players, $state, playerList)	{

		$scope.addPlayer = function() {
			var player = Players.createPlayer();
			playerList.addPlayers(player)
			$state.go('id', {id: player.id});
		}
		$scope.myList = playerList.players;
		console.log($scope.myList)
	})
	.directive('playerHand', function(GameCtrl){
	})
