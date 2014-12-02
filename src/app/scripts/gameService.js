'use strict';

angular.module('cardistry.game', ['cardistry.players', 'cardistry.game', 'firebase'] )

	.service('Game', function($firebase){
		
		var ref = new Firebase('https://cardistry.firebaseio.com/');
		var sync = $firebase(ref);

		var playersArray = sync.$asArray()

		self = this;
		this.players = playersArray
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

