'use strict';

angular.module('cardistry.main', ['cardistry.cards','firebase'])
	.constant('CONFIG', {
    Firebase: {
      baseUrl: 'https://cardistry.firebaseio.com/gameDB'
    }
  })

  .controller('MainCtrl', function (Deck, $scope, $firebase, Auth, $rootScope, $filter) {
  	var self = this;

  	Auth.onAuth(function(user){
      self.user = user;
    });

  	this.dealIn = function(){
  		this.user.hand = $filter('limitTo')(Deck.whiteCards, 10)
  		self.user.$save()
  	}
})

	.controller('PlayerCtrl', function(Deck, $filter, $scope, Auth, $state){
		var self = this;
  	
  	Auth.onAuth(function(user){
      self.user = user;
    });

    $("#answerCards li").hide();
      $("#answerCards li:first-child").show();
      var total = $("#answerCards li").length;
      var count = 0;
      $(".right").click( function() {
        $("#answerCards li:nth-child("+count+")").hide();
        count++;
        if (count === total) {
          count = 0;
        }
        $("#answerCards li:nth-child("+count+")").show();
        return false;
      })
      $(".left").click( function() {
        $("#answerCards li:nth-child("+count+")").hide();
        count--;
        if (count === total) {
          count = 0;
        }
        $("#answerCards li:nth-child("+count+")").show();
        return false;
      });



    $('html, body').css({'overflow': 'hidden','height': '100%'})

  	console.log(self.user)

		this.qcards = $filter('limitTo')(Deck.blackCards, 1)
		this.acards = self.user.hand
		self.user.$loaded().then(function(){
			self.acards = self.user.hand
			console.log(self.acards)
		})

		this.dealIn = function(){
  		this.user.hand = $filter('limitTo')(Deck.whiteCards, 10)
  		self.user.$save()
  	}

		this.playCard = function(player, cardId, cardText, index){
			self.acards.splice(index, 1);
			console.log(self.acards)
			self.qcards.splice(index, 1);
			self.qcards = $filter('limitTo')(Deck.blackCards, 1)
			console.log(self.user.hand)
			self.acards.push($filter('limitTo')(Deck.whiteCards, 1))
			self.user.hand = self.acards
			self.user.$save()

	}
})

	.controller('loginPageCtrl', function($rootScope, Auth, $scope, $firebase, $filter, Deck){
 
    this.logIn = Auth.logIn;
 
    this.logOut = Auth.logOut;
	})

	.factory('FirebaseUrl', function(CONFIG){
    return new Firebase(CONFIG.Firebase.baseUrl);
 	 })

  .factory('Auth', function (FirebaseUrl, $firebaseAuth, $firebase, $filter, Deck){
 
    var auth = $firebaseAuth(FirebaseUrl);
 
    return {
 
      /**
       * Wrapper for '$firebaseAuth.$onAuth()' that filters the
       * 'auth' object through the 'updateUser()' function
       */
      onAuth: function(cb){
        auth.$onAuth(function(data){
          cb(updateUser(data));
        });
      },
 
      /**
       * Wrapper for '$firebaseAuth.$authWithOAuthPopup()' that invokes
       * the correct provider code
       */
       logIn: function(){
         return auth.$authWithOAuthPopup('facebook');
       },
 
 
      // Wrapper for '$firebaseAuth.$unauth()'
      logOut: function(){
        auth.$unauth();
      }
    }; // END service
 
    /**
    * Tranform the `authdUser` object from `$firebaseAuth` into a full User
    * record in the `/users` collection.
    *
    * @param {Object} authdUser from $firebaseAuth.getAuth()
    * @return {Object} from $firebase.$asObject()
    */
     function updateUser(authdUser){
       if ( authdUser === null ){
         return null;
      }
 			
      var user = FirebaseUrl.child('players').child(authdUser.facebook.id);
 
      user.update({
        uid: authdUser.uid,
        facebook: authdUser.facebook,
        fullName: authdUser.facebook.displayName,
        firstName: authdUser.facebook.cachedUserProfile.first_name,
        avatarUrl: authdUser.facebook.cachedUserProfile.picture.data.url,
        dailyScore: 0,
        weeklyScore: 0,
        totalScore: 0
      });
 
      var user = $firebase(FirebaseUrl.child('players').child(authdUser.facebook.id)).$asObject();
 
      return user;
    } // END updateUser
  }); // END factory(Auth)