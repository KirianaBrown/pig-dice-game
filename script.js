/*

Click roll dice and generate a random number and set to dice value

*/

let globalScore, roundScore, currentPlayer;

currentPlayer = 0;
roundScore = 0;
globalScore = 0;


document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Generate Random Number
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber)

    // 2. Update Dice Src

    let domDice = document.querySelector('.dice');
    domDice.src = './src/assets/dice-' + randomNumber + '.png ';

    // 3. Add value to round score

    if (randomNumber !== 1) {
        roundScore += randomNumber;
        // get inner html / text content update
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;
    }



    // Set the score to sum


})