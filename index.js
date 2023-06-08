let playerName = "" + prompt("Enter your name:")
let coin = 0
let sum=0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let card = 0;
let cards = [];
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

let player = {
    name:playerName,
    coins:coin
}
player.name = playerName
playerEl.textContent = player.name + ": " + player.coins + " coins"

function getRandomCard() {
    let randomCard = Math.floor( Math.random()*13 ) + 1;
    if(randomCard > 10) return 10
    else if(randomCard === 1) return 11
    else return randomCard
}
function startGame() {
    coin = 0
    player.coins = coin
    playerEl.textContent = player.name + ": " + +player.coins + " coins"

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackJack = false;
    isAlive = true;   
    renderGame()
 }
function renderGame() {

let res = "Cards: ";
for(let i=0;i<cards.length ; i++) {
    res += cards[i]+' ';
}
cardsEl.textContent = res
sumEl.textContent = "Sum: " + sum;

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} 
else if(sum === 21) {
    message = "BINGO!! You've got Blackjack!"
    hasBlackJack = true;
    player.coins += 50
}
else {
    message = "You're out of the game!"
    isAlive = false;
    
}
if(!hasBlackJack && !isAlive) {coin -=10; console.log("- kia"); player.coins = +player.coins + +coin}
playerEl.textContent = player.name + ": " + +player.coins + " coins"
messageEl.textContent = message;

}

function newCard() {
    if(isAlive && !hasBlackJack) {
        console.log("getting new card")
    card = getRandomCard();
    sum+=card;
    cards.push(card)
    renderGame()
}
}