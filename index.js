let firstCard, secondCard, sum;
// console.log(typeof firstCard)

let hasBlackJack = false;
let isAlive = true;
let message = "";
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} 
else if(sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true;
}
else {
    message = "You're out of the game! 😭"
    isAlive = false;
}
