console.log("Up and running!");


var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMath() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You got a match!");
} else {
alert("Sorry. Try Again.");
}
};

function flipCard(cardId) {
	console.log("user flipped " + cards[cardId]);
cardsInPlay.push(cardId);
};

flipCard(0);
flipCard(2);
checkForMath();