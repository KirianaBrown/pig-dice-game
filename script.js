/*
    1. on button roll display a random dice number
*/

// ########################################################
// ********* Define the variables outside of any functions so they can be accessed by all (globally) *********

let globalScore, roundScore, currentPlayer, scores, gamePlaying;

// ########################################################
// ********* INIT FUNCTION *********

init();

function init() {
    // Global Scores
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    // Round scores
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    // set game variables
    currentPlayer = 0;
    roundScore = 0;
    globalScore = 0;
    scores = [0, 0];
    // hide dice
    document.querySelector('.dice').style.display = 'none';
    // remove classes
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    // reset names
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    // Set game is playing to true
    gamePlaying = true;
}
// ########################################################
// ********* ROLL BUTTON FUNCTION *********

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Generate Random Number
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        console.log(randomNumber)

        // 2. Update Dice Src and display
        let domDice = document.querySelector('.dice');
        domDice.src = './src/assets/dice-' + randomNumber + '.png ';
        domDice.style.display = "inline";

        // 3. Add value to round score
        if (randomNumber !== 1) {
            // Add round score
            roundScore += randomNumber;
            // get inner html / text content update
            document.querySelector('#current-' + currentPlayer).textContent = roundScore;
        } else {
            console.log('You rolled a 1')
            roundScore = 0;
            nextPlayer();
        }
    }
})

// ########################################################
// ********* NEXT PLAYER FUNCTION *********

function nextPlayer() {
    // 1. Change current player using ternary 
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    console.log('player has been changed')
    console.log('This should change the active state of the player')

    // 2. Reset round scores to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // 3. Toggle the active class list on and off
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // 4. Hide original dice
    document.querySelector('.dice').style.display = 'none';
}

// ########################################################
// ********* HOLD FUNCTION *********

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        console.log('hold button');
        // add the round score the the current player score
        scores[currentPlayer] += roundScore;

        // update the dom inner html
        document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];

        // check if score is 100 or greater and declare winner
        if (scores[currentPlayer] >= 10) {
            console.log('winner')
            document.querySelector('#name-' + currentPlayer).textContent = 'winner!';
            // Hide dice
            document.querySelector('.dice').style.display = 'none';
            // add winners class
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            console.log('next player')
            roundScore = 0;
            nextPlayer();
        }
    }
});

// ########################################################
// ********* NEW BUTTON FUNCTION *********

document.querySelector('.btn-new').addEventListener('click', init);

// ########################################################
// ********* INIT FUNCTION *********