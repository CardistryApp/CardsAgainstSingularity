var game = {
	players: {
		0: {
			name: "Ari",
			id: 1,
			score: 2,
			cards: {
				0: {
					id: 431
					text: "Flying Sex Snakes"
				}
				1: {
					id: 124
					text: "Nicolas Cage"
				}
				2: {
					id: 42
					text: "Your mom"
				}
				3: {
					id: 211
					text: "Bill Clinton"
				}
			}	
		}
		1: {
			name: "Melissa",
			id: 2,
			score: 1,
			cards: {
				0: {
					id: 1131
					text: "Jesus Christ in toast"
				}
				1: {
					id: 240
					text: "Hairy not Harry"
				}
				2: {
					id: 542
					text: "Alphabet Soup"
				}
				3: {
					id: 11
					text: "an errection lasting for longer than four hours"
				}
			}	
		}
		2: {
			name: "David",
			id: 3,
			score: 0,
			cards: {
				0: {
					id: 1132
					text: "That feeling"
				}
				1: {
					id: 254
					text: "The Miami Dolphins defensive line"
				}
				2: {
					id: 132
					text: "Santa's sack"
				}
				3: {
					id: 164
					text: "Dom Giggalo American Private Eye"
				}
			}	
		}
	}
	deck: {
		whiteCards: "A",
		blackCards: "Q"
	}
	turn: {
		number: 4,
		cardsPlayed: {
			0: {
				playedBy: 2
				id: 438
				text:"Nicolas Cage"
			}
			1: {
				playedBy: 3,
				id: 123,
				text: "Santa's sack"
			}
		}
		currentDealer: "Ari"
	}
	finalScore: 10
}
