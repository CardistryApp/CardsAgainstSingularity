var gameDB = {
	Players: {
		0: {
			id: 0,
			name: 'Ari Gonzalez',
			dayPoints: 5,
			wkPoints: 17,
			culmaltivePts: 56,
			hand: [{
				0: {
					id: 411,
					text: "Do a barrel roll!"
				},			
				1: {
					id: 123,
					text: "lorum ipsum"
				},
				2: {
					id: 531,
					text: "text text"
				}	
			}]
			cardsPlayed: [{
				qCardText: "War! What is it good for?",
				aCardText: "Batman!",
				points: 6
			},
			{
				qCardText: "What ended my last relationship?",
				aCardText: "a defective condom",
				points: 15
			}]
		}
		1: {
			id: 1,
			name: 'Melissa Malpica',
			dayPoints: 8,
			wkPoints: 21,
			culmaltivePts: 48,
			hand: [{
				0: {
					id: 411,
					text: "Do a barrel roll!"
				},			
				1: {
					id: 123,
					text: "lorum ipsum"
				},
				2: {
					id: 531,
					text: "text text"
				}	
			}]
			cardsPlayed: [{
				qCardText: "War! What is it good for?",
				aCardText: "Batman!",
				points: 6
				},
				{
				qCardText: "What ended my last relationship?",
				aCardText: "a defective condom",
				points: 15
			}]
		}
	}
	Deck: {
		questionDeck: "blackCards",
		answerDeck: "whiteCards"
	}
	CzarDeck: [{
		blackCardText: "Who Framed Roger Rabbit?",
		whiteCardText: "Bill Clinton",
		points: 2,
		playedBy: {
			id: 0,
			name: 'Ari Gonzalez'
			}
		},
		{
		blackCardText: "What makes me cry?",
		whiteCardText: "kids with ass cancer",
		points: 14,
		playedBy: {
			id: 1,
			name: 'Melissa Malpica'
		}
	}]
}