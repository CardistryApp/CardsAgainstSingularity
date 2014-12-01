'use strict';

angular.module('cardistry.players', ['cardistry.game', 'cardistry.cards'])

	.controller('playerCtrl', function(Game, $scope, $filter, Deck, $state){
		var idCounter = 0;

		$scope.players = [];

		function Player(name, index){
			this.name = name;
			this.cards = $filter('limitTo')(Deck.whiteCards, 10);
			this.id = ++idCounter;
			this.score = 0;
			Deck.whiteCards.splice(index, 10);
		}

		$scope.createPlayer = function(){
			var player = new Player($('#playerName').val());
			Game.players.push(player);
			$state.go('player.id', {id: player.id});
			console.log(Game.players);
			return false;
			};

		});