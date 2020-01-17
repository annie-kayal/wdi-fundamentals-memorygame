console.log("Up and running!");


var cards = [
{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

console.log("images/queen-of-hearts.png");
console.log("Hearts");
console.log("images/king-of-hearts-of-hearts.png");
console.log("Hearts");

function checkForMath() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You got a match!");
} else {
alert("Sorry. Try Again.");
}
};

function flipCard(cardId) {
	console.log("user flipped " + cards[cardId].rank);
cardsInPlay.push(cardId).rank;
};

flipCard(0);
flipCard(2);
checkForMath();