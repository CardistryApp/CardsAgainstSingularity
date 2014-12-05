'use strict';

angular.module('cardistry.cards', [])

	.service('Deck', function($http){

  	//creating the deck//

  	this.deck = [];
  	
  	this.whiteCards = [];
  	this.blackCards = [];

		var self = this;  	

  	$http.get('/assets/data/cards.JSON').
  		then(function(deck){
  			angular.forEach(deck.data, function(card){
  				if(card.cardType === "A"){
  						self.whiteCards.push(card);
  			} else {
  				if(card.cardType === "Q"){
  						self.blackCards.push(card);
  					}
  				} 
  			})
  			self.deck = deck.data
  			shuffleDeck(self.whiteCards);
  			shuffleDeck(self.blackCards);
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
  	})