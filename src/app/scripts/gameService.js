'use strict';

angular.module('cardistry.game', ['cardistry.players', 'cardistry.game', 'firebase'] )
	
	.constant('FIREBASE_URL', 'https://cardistry.firebaseio.com')

	.service('Game', function($firebase, FIREBASE_URL, $stateParams){
		var ref = new Firebase(FIREBASE_URL);
		var sync = $firebase(ref);

		var self = this;
		this.players = sync.$asArray();
		this.addPlayers = function(player) {
			self.players.$add({
				'name': player.name,
				'id': player.id,
				'cards': player.cards,
				'score': player.score,
				'dealer': false
			})
		}
		this.loadData = function(){
			angular.forEach(self.players, function(value){
				if(value.id == $stateParams.id){
					self.value = value
				}
				console.log(value)
				return value
			})
		}
		return this;
	})

	.controller('GameCtrl', function(Players, $stateParams, $state, Game, $scope, $firebase)	{

		var ref = new Firebase('https://cardistry.firebaseio.com');
		var sync = $firebase(ref);
		var obj = sync.$asObject();

		$scope.list = sync.$asArray();

		$scope.list.$loaded().then(function(){
			console.log("list as " + $scope.list.length + " item(s)")
		});
		// $scope.players = sync.$asArray();

		console.log($scope)
		obj.$bindTo($scope, 'players')


		$scope.addPlayer = function(name) {
			this.name = $('#playerName').val()
			var player = Players.createPlayer(this.name);
			Game.addPlayers(player);
			Game.loadData();
			setTimeout(function(){
				$state.go('id', {id: player.id})
			}, 50)
		}
	})

	