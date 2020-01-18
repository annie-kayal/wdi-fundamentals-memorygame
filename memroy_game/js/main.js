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

function checkForMath() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You got a match!");
} else {
	alert("Sorry. Try Again.");
}
};

function flipCard() {
	let cardId = this.getAttribute('data-id');
	console.log("user flipped " + cards[cardId].rank)
	cardsInPlay.push(cardId).rank;
	this.setAttribute('src', cards[cardId].cardImage)
	
if (cardsInPlay.length === 2) {
	checkForMath();
	};
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();
