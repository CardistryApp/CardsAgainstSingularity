'use strict';

angular.module('cardistry.cards', [])

  .factory('Deck', function($http){
    var service = {
      load: function(){
        return $http.get('assets/data/cards.JSON').then(function(deck){
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
            if(cards[i].cardType === "Q" && cards[i].numAnswers === 1){
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
        //Orders card in array by priority and assigns to user
        angular.forEach(service.cards, function(deck){
          deck.sort(function(obj1, obj2){
            return obj2.priority - obj1.priority;
          });
        })
        return service.cards
      }, // END SHUFFLE

      nextWhite: function(deck, numDeal){ // selecting the next lowest priority, if at length === 10 trigger shuffle
        var hand = deck.splice(0, numDeal)
        return hand
      }, //END NEXTWHITE

      nextBlack: function(){ // selecting the next lowest priority, when at 0, trigger shuffle

      } //END NEXTBLACK

    }; //END SERVICE
    return service;
  });
