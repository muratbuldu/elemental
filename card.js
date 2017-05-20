function Card(name, id) {
	this.name = name;
	this.id = id;
}

Card.prototype.play = function(target) {

	// TODO get effect from server
	// use effect on target

	// The CardEffect could be loaded when
	// the card itself is loaded into the game.
	// (Not when the card is used.) This might
	// actually allow us to mark available targets
	// in the game client.
	// This is a design choice and should be
	// debated before implementation.

};

// Example card implementation
var yalabik = new Card("Yalabık", 1); // The best card in the game :V
