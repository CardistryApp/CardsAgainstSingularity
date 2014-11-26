#User Stories

###Player

ESTIMATE: 13

I can create a room so that I can invite people to play. 
	
* Where is this room created?
* How do you get to the creation button?
* How is this room different than any other room? (unique string in URL)
* How do I invite people to play?
* How do I know when people have joined the room?

ESTIMATE: 5

I can draw 10 cards so that I can play
	
* How do I receive the cards?
* What do the cards look like?
* How can I do with the cards?
	* swipe through hand
	* submit card to board
* What happens when I need more cards?
	* game will automatically check that all players have 10 cards after their turn

ESTIMATE: 20

I can send cards from my hand to the board so that I can complete my turn.
	
* How do I send them to the board? (physically)
	* swipe up
* What does this look like?
* How do I know my card made it to the board?
	* Give me the ocular proof, Iago
* How do I know its the right card that was sent to the board?
	* using the card ID from the JSON file

ESTIMATE: 2

I can look through my hand of cards so that I can choose the card I want.
	
* How do I look through my hand?
* What do the transitions look like?
* How do I know that my cards are different than the other players' cards?

ESTIMATE: 8

I can automamtically recieve a card after my turn so that I can always have a full hand.
	
* How will I receive these cards?
* How will I know I've received a card?
	* haptic feedback or a notification
* How many cards should I have at a time?
	* 10 at the beginning of the turn, 9 at the end of the turn unless you are the dealer

ESTIMATE: 3

I can see my score so I can keep track of who's winning.
	
* What does the score look like?
* Where can I see the score?
* Can I see the other players' score?
* How does my score update?
* When does my score update?

ESTIMATE: 8

I can see an overlay once I've played a card so that I can't play multiple cards on a single turn.
	
* What does this overlay look like?
* How is this overlay applied?
* When does this overlay appear?
* How does this overlay prevent me from playing another card.


###Admin

ESTIMATE: 3

I can accept a link to a room so that I can join a room.
	
* How does this link look? (URL)
* How will I get this link?
* What is the first thing I see after I click this link?
	* Game room lobby

<!-- STRETCH GOAL -->
<!-- I can choose a background so that I can customize my game board. -->

ESTIMATE: 5

I can send a link so that my friends can join my room.
	
* How does this work?
* What services can I use to send the link?
	* Text message, Email, Airdrop, any way you can send text between devices	

ESTIMATE: 8

I can log into the room with my tablet so that I can create the board.
	
* How does a tablet with no data connection receive the link?
	* must have a network connection to play this game
	* link can be received as Text message, Email, Airdrop, any way you can send text between devices
* What does the game lobby look like on a tablet?


### Dealer

ESTIMATE: 8

The game organizer will be the first dealer so the board can keep track of who's next.
	
* How does the game know who the organizer is?
* How does the game know who is next?
	* Cycles through the NG-repeat created players. When it reaches the end of the list, it starts at the top of the list again.
* How does the next dealer know they are now the dealer?
	* UI element on the hand display that will denote dealer (see next story)

ESTIMATE: 8

The dealer's hand view will have an overlay that says dealer & blocks their cards so that the dealer does not play a card
	
* What does this overlay look like?
* How is this overlay applied?
* When does this overlay appear?
* How does this overlay prevent me from playing my cards.

ESTIMATE: 8

The dealer can flip the cards once all active players have submitted their card so that they can choose the winner
	
* How does the game know all of the active players have submitted their cards?
	* Flip button functionality will not work unless the number of submitted cards === number of players - 1.
* How does the dealer choose the winner?
	* tapping the card
* What happens after the dealer chooses the winner?
	* The question card (black) will slide to the side of the screen with the winning player's name

ESTIMATE: 5

Dealer status will change to the next player so that everyone gets to be dealer
	
* How does this look?
* How is this enforced?
* How does the next dealer know they are now the dealer?
	* UI element on the hand display that will denote dealer


### Board

ESTIMATE: 13

Board will display the card submitted by players so that it can keep track of the status of the turn
	
* How is this displayed?
* Where is this displayed?
	* On the 'board' route
* How is this enforced?

ESTIMATE: 8

Board will clear the cards once winner is selected and apply the points to that player's score so that the next turn is ready to begin
	
* How does the board clearing look?
* How are points applied?
* Where are points applied?
* How does the board know its ready for a new turn?
* How does the board know which player to apply the points to?

ESTIMATE: 13

Board will end the game once any player reaches a score of 10 so that there is an endgame
	
* What does endgame look like?
	* What happens to the board when endgame?
	* When is endgame?
		* After the first player receives 10pts
	* How is a new game started?
	* How do I know the game is over? 

ESTIMATE: 8

Board displays score of all players so that you can see who's winning
	
* What does this look like?
* Where are the scores located on the board?
* How does the score update?
* How does the board know when to update the score?
* How does the board know to display the proper score with the proper player?

