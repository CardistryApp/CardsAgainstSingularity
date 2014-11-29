#User Stories PLAYER, ADMIN, DEALER

###Player
<!--Recieve link, Accept Link, Reject a link, View the lobby, View the Game Room, View Other Players in Room, View all scores, Leave the Room-->

####I can recieve a link to join a room so that I can play the game. (3)
	
* How does this link look? (URL)

	*

* How will I get this link?

	*

* What is the first thing I see after I click this link?

	* Game room lobby

* What if I dont wnat to join the room?

	* Don't accept (click) on the link.


####I can let other players know when I am ready to play so that the game can start.

* How can I do this?

		*Press the 'Start' button

* How does this look?

		* It is shaped like a rectrangle and has the word 'Start' on it.

* Does the game start as soon as I am ready?

		* No, the game starts when either the min ( ) or max ( ) numbers of players join the room.

* How do I know if weather the game is being played with either the min or max players?

		*

* What happens after I 'Start' the game?

	* I recieve 10 cards so that I can play.

* How do I receive the cards?

	* Automatically upon selecting 'Start'.

* How will I know I recieved a card?

	* haptic feedback or a notification

* What do the cards look like?

	* Rectacngular shaped with letters/text on it. (SVG Graphic)

* How can I do with the cards?

		* swipe through all my cards
		* submit card to board

* What happens when I need more cards?

		* game will automatically check that all players have 10 cards after their turn

* How many cards should I have at a time?

	* 10 at the beginning of the turn, 9 at the end of the turn unless you are the dealer.

* How can I leave a room?

	*


####I can display the card I submitted so that all players, including myself can keep track of the status of the turn (13)	

* How is this (the card) displayed?

	* Displayed as a rectangular shape with text/ letters on it. (SVG Graphic)

* Where is this displayed?

	* On the 'board' route

* How is this enforced?

	*


####I can see the score of all players so that I can see who has the highest score. (8)

	
* What does this look like?

	*  A counter with numbers

* Where are the scores located?

	* On the board

* How does the score update?

	* by adding points to the cards owner at the end of a game round.

* When does my score update?

	* When the dealer selects a card after every player has submitted a card.

* How does the board know to display the proper score with the proper player?

	*

* Can I see the other players' score?

	* Yes. On the board display


####I can submit a card so that I can complete my turn. (20)


* How do I send them to the board? (physically)

	* touch screen - swipe up

* What does this look like?

	*

* How do I know my card made it to the board?

	* Give me the ocular proof, Iago

* How do I know my card matched the card that shows up on the board?

	* using the card ID from the JSON file


####I can look through my cards so that I can choose the card I want. (2)


* How do I look through my cards?

	* From my hand display.

* What do the transitions look like?

	*Swipe (left/right) Animation

* How do I know that my cards are different than the other players' cards?

	* 



####I can know that I submitted a card so that I don't submit 2 cards on one turn. (8)

	
* How will I know when I submitted a card?

	* My hand display will have an overlay on it that reads 'waiting' or other text/image.
	* The board display will show the card you submitted.

* What if I submitted the wrong card?

	*
	*


* How does this look?

	* This looks like the game view is faded out in the background and a color is overlayed with text or image.

* When does this overlay appear?

	* When player has submited a card via swipe.

* How does this overlay prevent me from playing another card.

	*Overlay disables the players view and card submission capabilities/function.


###Admin
<!--Create Room, Enter Room, Invite Others, Play Game-->

####I can create a room so that I can invite people to play. (13)

* Where is this room created?
* How do you get to the creation button?
* How is this room different than any other room? (unique string in URL)
* How do I invite people to play?
* How do I know when people have joined the room?


####I can enter the room so that I can create the board. (8)

* How do I enter the room?

	*Log in

* How does this look?

* Where do I log in?

	* Game Lobby

* How do I log in?

* How does a tablet with no data connection receive the link?
	* must have a network connection to play this game
	* link can be received as Text message, Email, Airdrop, any way you can send text between devices

* What does the game lobby look like on a tablet?


####I can send a link so that I can invite others to join the room and let them know I am ready to 'Start' the game. (5)

* How does this work?

* How does this look?

* What services can I use to send the link?
	* Text message, Email, Airdrop, any way you can send text between devices	


<!-- STRETCH GOAL -->
<!-- I can choose a background so that I can customize my game board. -->


### Dealer


####I can always be the First Player so that the game can keep track of who is next. (8)


* How does the game know who the dealer is?

* How does the game know who is next?
	* Cycles through the NG-repeat created players. When it reaches the end of the list, it starts at the top of the list again.

* How does the next dealer know they are now the dealer?
	* UI element on the hand display that will denote dealer (see next story)


####I can know that I am the dealer so that I don't try to sumbit a card. (8)

	
* How will I know I am the dealer?

	* My hand display will have an overlay on it that reads 'Dealer' or other text/image.
	* My submit/swipe feature will be disabled.

	
* What does this overlay look like?

	* a color over display to blur out game background.

* How is this overlay applied?

	* via a class given when it is my turn.

* When does this overlay appear?

	* When its my turn to be the dealer.

* How does this overlay prevent me from playing my cards.

	* Blurs out my background and disabled my submit/swipe function.


####I can select the cards once all active players have submitted their card so that they can choose the card I want to be the winning card. (8)

* How can I see all the cards submitted?

	*I can tap the "flip cards" button on the board display.

* What happens when I touch the "flip cards" button?

	* The cards on the board display will show the text side of the card

* How does this look?

	* Looks like a circle that reads 'flip cards'. Has a transition effect of flip.
	
* How do I know that all of the active players have submitted their cards?

	* Flip button functionality will not work unless the number of submitted cards === number of players - 1.

* How can I choose the winning card?

	* tapping the card on the display board.

* What happens after the dealer taps the card?

	* The point will be applied to the owner of that card submission.
	* The card will flip over


####My status will change to the next player so that everyone gets to be dealer (5)

	
* How does my dealer status change?

	* The "Dealer" class/limitations are removed.

* How does the next player become the dealer?

	* The "Dealer" class/limitations are added to the player.

* How does the next dealer know they are now the dealer?

	* UI element on the hand display that will denote dealer.






### Board

####Board will clear the cards once winner is selected and apply the points to that player's score so that the next turn is ready to begin

ESTIMATE: 8
	
* How does the board clearing look?
* How are points applied?
* Where are points applied?
* How does the board know its ready for a new turn?
* How does the board know which player to apply the points to?


####Board will end the game once any player reaches a score of 10 so that there is an endgame

ESTIMATE: 13
	
* What does endgame look like?
	* What happens to the board when endgame?
	* When is endgame?
		* After the first player receives 10pts
	* How is a new game started?
	* How do I know the game is over? 



