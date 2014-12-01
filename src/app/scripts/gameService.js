'use strict';

angular.module('cardistry.game', ['cardistry.players', 'cardistry.game'] )

	.service('playerList', function(){
		self = this;
		this.players = [];
		this.addPlayers = function(player) {
			self.players.push({
				'player': player.name,
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
			console.log(playerList.players)
		}

	})
