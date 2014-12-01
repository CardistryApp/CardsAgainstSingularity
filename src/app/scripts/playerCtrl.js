'use strict';

angular.module('cardistry.players', ['cardistry.cards'])
	
	.factory('Players', function($filter, Deck, $state){
		var service = {};

		service.createPlayer = function() {
			var player = new Player($('#playerName').val());
			return player;
			};

		var idCounter = 0;

		var Player = function(name, index){
			this.name = name;
			this.cards = $filter('limitTo')(Deck.whiteCards, 10);
			this.id = ++idCounter;
			this.score = 0;
			Deck.whiteCards.splice(index, 10);
		}
		return service;
		});