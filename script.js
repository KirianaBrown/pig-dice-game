/*

Click roll dice and generate a random number and set to dice value

*/

init();

let globalScore, roundScore, currentPlayer, scores;

currentPlayer = 0;
roundScore = 0;
globalScore = 0;


document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Generate Random Number
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber)

    // 2. Update Dice Src and display

    let domDice = document.querySelector('.dice');
    domDice.src = './src/assets/dice-' + randomNumber + '.png ';

    domDice.style.display = "inline";

    // 3. Add value to round score

    if (randomNumber !== 1) {
        roundScore += randomNumber;
        // get inner html / text content update
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;
    } else {
        roundScore = 0;
        console.log('You rolled a 1')
        nextPlayer();
    }

})

function nextPlayer() {
    // Ternary Function 
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    roundScore = 0;
    console.log('player has been changed')
    console.log('This should change the active state of the player')

    // Reset round scores to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Toggle the active class list on and off
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Hide original dice
    document.querySelector('.dice').style.display = 'none';
}

// hold button - need to add the round score to the global score

document.querySelector('.btn-hold').addEventListener('click', function() {
    console.log('hold button');

    scores[currentPlayer] += roundScore;

    // add round score to the global score;
    let foo = document.getElementById('score-' + currentPlayer).textContent = scores[currentPlayer];

    nextPlayer();

})

function init() {
    // Set all values = 0.
    scores = [0, 0];
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
}