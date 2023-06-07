let firstCard=10, secondCard=10, sum=0;
sum = firstCard + secondCard
// console.log(typeof firstCard)

let cards = [firstCard, secondCard];

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let hasBlackJack = false;
let isAlive = true;
let message = "";
let card = 0;

function startGame() {
    renderGame()
 }
function renderGame() {

let res = "Cards: ";
for(let i=0;i<cards.length ; i++) {
    res += ' ' + cards[i];
}
cardsEl.textContent = res
sumEl.textContent = "Sum: " + sum;

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} 
else if(sum === 21) {
    message = "BINGO!! You've got Blackjack!"
    hasBlackJack = true;
}
else {
    message = "You're out of the game!"
    isAlive = false;
    
}

messageEl.textContent = message;

}

function newCard() {
    card = 8;
    sum+=card;
    cards.push(card)
    renderGame()
}