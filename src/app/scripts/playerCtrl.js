'use strict';

angular.module('cardistry')
	.factory('PlayerFactory', function(){
		var Player = function(name){
			this.name = name;
			this.cards = {};
			this.id = 0;
			this.score = 0;
		}
	})
	.controller('PlayerCreation', function(PlayerFactory, $scope){
		$scope.createPlayer = function(){
			$('#playerTemplate').toggle();
		}
	})