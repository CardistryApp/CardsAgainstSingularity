'use strict';

angular.module('cardistry.game', ['cardistry.players', 'cardistry.game', 'firebase'] )

	.service('Game', function($firebase){
		
		var ref = new Firebase('https://cardistry.firebaseio.com/');
		var sync = $firebase(ref);

		sync.$set({})

		self = this;
		this.players = [];
		this.addPlayers = function(player) {
			self.players.push({
				'name': player.name,
				'id': player.id,
				'cards': player.cards,
				'score': player.score,
				'dealer': false
			})
		}
		return this;
	})

	.controller('GameCtrl', function(Players, $state, Game)	{

		var self = this;
		var playersList = [];

		this.addPlayer = function(name) {
			this.name = $('#playerName').val()
			var player = Players.createPlayer(this.name);
			Game.addPlayers(player)
			$state.go('id', {id: player.id});
		}
		playersList = Game.players;		
	})

