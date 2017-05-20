var HUD = {
	// NOTE: This is a very early version of game states.
	// No thought process has gone over these state
	// constants
	// Game States
	// 0  = PLAYER'S TURN CHOOSING ACTION
	// 1  = PLAYER'S TURN DRAWING TILSIM
	// 2  = PLAYER'S TURN GOING FOR MEZAT
	// 3  = PLAYER'S TURN PLAYING CARDS

	// 4  = OPPONENT'S TURN CHOOSING ACTION
	// 5  = OPPONENT'S TURN DRAWING TILSIM
	// 6  = OPPONENT'S TURN GOING FOR MEZAT
	// 7  = OPPONENT'S TURN PLAYING CARDS

	// 8  = PLAYER TURN START EFFECTS
	// 9  = PLAYER TURN END EFFECTS
	// 10 = OPPONENT TURN START EFFECTS
	// 11 = OPPONENT TURN END EFFECTS
	gameState : 0,

	playerCardCount : 0,
	opponentCardCount : 0,
	playerCards : [],
	currentMezat : []

};