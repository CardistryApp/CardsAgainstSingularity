'use strict';

angular.module('cardistry.cards', [])

  .factory('Deck2', function($http){
    var service = {
      load: function(){
        return $http.get('/assets/data/cards.JSON').then(function(deck){
          service.cards = {};
          service.cards.white = []
          service.cards.black = []
          var cards = deck.data
          for(var i = 0; i < cards.length; i++)
            if(cards[i].cardType === "A"){
            {
              service.cards.white[cards[i].id] = {
                text: cards[i].text,
                priority: 0,
                expansion: cards[i].expansion
              }
            }
          } else {
            {
              service.cards.black[cards[i].id] = {
                text: cards[i].text,
                priority: 0,
                expansion: cards[i].expansion
              }
            }
          }
        }) //END PROMISE RETURN
      }, // END LOAD

      shuffle: function(){ // adding random number to priority property of object
        angular.forEach(service.cards.white, function(card){
          card.priority = Math.floor(Math.random() * 
            (Object.keys(service.cards.white).length - 1) + 1);
        })
        angular.forEach(service.cards.black, function(card){
          card.priority = Math.floor(Math.random() * 
            (Object.keys(service.cards.black).length - 1) + 1);
        })
        // console.log(service.cards.white)
        return service.cards
      }, // END SHUFFLE

      nextWhite: function(deck, numDeal){ // selecting the next lowest priority, if at 10 trigger shuffle
        deck.sort(function(obj1, obj2){
          return obj2.priority - obj1.priority;
        });
        var hand = deck.slice(0, numDeal)
        angular.forEach(hand, function(card){
          card.priority = 0;
        })
        return hand
      }, //END NEXTWHITE

      nextBlack: function(){ // selecting the next lowest priority, when at 0, trigger shuffle

      } //END NEXTBLACK

    }; //END SERVICE
    return service;
  })


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
  				if(card.cardType === "Q" && card.numAnswers === 1){
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