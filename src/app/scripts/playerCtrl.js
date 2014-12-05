'use strict';
angular.module('cardistry.players', ['cardistry.cards'])
	
	// .factory('Players', function($filter, Deck, $state){
	// 	var service = {};
	// 	service.createPlayer = function(name) {
	// 		var player = new Player(name);
	// 		return player;
	// 		};

	// 	var idCounter = 0;
	// 	var Player = function(name, index){
	// 		this.name = name;
	// 		this.cards = $filter('limitTo')(Deck.whiteCards, 10);
	// 		this.id = ++idCounter;
	// 		this.score = 0;
	// 		Deck.whiteCards.splice(index, 10);
	// 	}
	// 	return service;
	// 	})

	.controller('PlayerCtrl', function(Game, $stateParams, $scope){
		var value = {}
		var self = this
		angular.forEach(Game.players, function(value, index){
			if(value.id == $stateParams.id){
				return self.value = value
			}
		})
	})