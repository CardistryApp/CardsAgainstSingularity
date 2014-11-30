'use strict';

angular.module('cardistry')
	.controller('CardsCtrl', function($scope, $http, $filter){
  	
  	//creating the deck//

  	$scope.deck = [];
  	$scope.whiteCards = [];
  	$scope.blackCards = [];

  	$http.get('/assets/data/cards.JSON').
  		then(function(file){
  			angular.forEach(file.data, function(card){
  				if(card.cardType === "A"){
  					$scope.whiteCards.push(card);
  				} else {
  					if(card.cardType === "Q"){
  						$scope.blackCards.push(card);
  					}
  				} 
  			})
  			$scope.deck = file.data
  			shuffleDeck($scope.whiteCards);
  			shuffleDeck($scope.blackCards);
  		});

  	//shuffling the deck//

  	var shuffleDeck = function(deck){
			var m = deck.length, t, i;

			while(m) {
				i = Math.floor(Math.random() * m--);
				t = deck[m];
				deck[m] = deck[i];
				deck[i] = t;
			}
			return deck;
		}

		//Player Creation and Management//

		var idCounter = 0;

		$scope.players = [];

		var Player = function(name, index){
			this.name = name;
			this.cards = $filter('limitTo')($scope.whiteCards, 10);
			this.id = ++idCounter;
			this.score = 0;
			$scope.whiteCards.splice(index, 10);
		}

		$scope.createPlayer = function(){
			$('#playerTemplate').show();
			$('#playerSignIn').hide();
			var player = new Player($('#playerName').val());
			$scope.players.push(player)
			console.log($scope.players)
			return false;
			};
  	})