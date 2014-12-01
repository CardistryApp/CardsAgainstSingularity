'use strict';

var game = angular.module('cardistry.game', [] );

game.service('Game', function($rootScope){
	var service = {
		
		players: [],

		addPlayer: function(player) {
			service.players.push( player )
			$rootScope.$broadcast( 'players.update')	
		}
	}
	return service;
})