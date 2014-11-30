'use strict';

angular.module('cardistry')
  .controller('MainCtrl', function ($scope) {

  	$scope.sendText = function(phoneNum){
  		var accountSid = 'ACf58e41a4fd0ab11312a28e2b43d573d4'; 
			var authToken = '1fa9bb818461cd57a5b322848ee28aa4';

			var client = require('twilio')(accountSid, authToken);

			client.messages.create({ 
				to: phoneNum,
				from: "+14582022737", 
				body: "Trial because the developers of this app are too damn cheap to pay for anything.                 Anyway follow me to play a game of cards. http://www.cardistryApp.com/03r2jrmflkm3/lobby ",   
			}, function(err, message) { 
				console.log(message.sid); 
			}); 
  		$scope.phoneNum = ''
  	};
  })
