'use strict';

angular.module('cardistry.main', ['cardistry.cards','firebase'])

  .controller('MainCtrl', function (Deck, $scope, $firebase, Auth) {

  	//firebase gameObject stuff
  	var ref = new Firebase('https://cardistry.firebaseio.com').child('gameDB')
  	var sync = $firebase(ref);
  	var syncObject = sync.$asObject();

  	//firebase profile stuff
  	var pref = new Firebase('https://cardistry.firebaseio.com').child('gameDB').child('players')
  	var psync = $firebase(pref)
  	var psyncArray = psync.$asArray();
  	var psyncObj = psync.$asObject();

  	//Auth stuff
  	$scope.auth = Auth;
    $scope.logIn = function(){
      $scope.auth.$authWithOAuthPopup("facebook").then(function(authData) {
        console.log("Logged in as:", authData.facebook.displayName);

      }).catch(function(error) {
        console.error("Authentication failed: ", error);
      });
    }
    $scope.user = $scope.auth.$getAuth();

    function isNewUser() {
       if(pref.child($scope.user.uid) === null){
       	return true;
       } {
       	return false;
       }
     }
		
     console.log(isNewUser())

		pref.onAuth(function(authData) {
  		if (authData && isNewUser) {
  			$scope.user.firstName = $scope.user.facebook.cachedUserProfile.first_name,
  			$scope.user.profilePic = $scope.user.facebook.cachedUserProfile.picture.data.url,
  			psyncObj.$save()
    		pref.child(authData.uid).set(authData);
 			 }
		});


  	console.log($scope.user.uid)

  	var Player = function(){
  		return {
  			firstName: $scope.user.facebook.cachedUserProfile.first_name,
  			profilePic: $scope.user.facebook.cachedUserProfile.picture.data.url
  		}
  	}

	  
	  //locking the viewport	
  	$('html, body').css({'overflow': 'hidden','height': '100%'})

})

  .factory('Auth', function($firebaseAuth){
		var ref = new Firebase('https://cardistry.firebaseio.com').child('gameDB')
  	return $firebaseAuth(ref);
  })

