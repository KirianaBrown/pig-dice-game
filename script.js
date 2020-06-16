/*
    Pig Dice Game Created by Kiriana Brown 2019
    Game Rules: If a player rolls a 1 then it is the next players turn, first to 100 wins!  
*/
/* GAME LOGIC
    1. Set up an init function which sets the variables and the game is playing state. 
    2. on button roll if the game is playing (ie set to true) then display a random dice and add the dice face value to the round score of the current player. 
    3. if the dice face value is === 1 then round score is 0 and next player function is called. 
    4. Next player function changes the active state to the current player
    5. the hold button if game is playing will add the round score value to the total player hand. If the player hand is greater or === to 100 than the winner class is added and the game playing is now set to false
    6. button new resets the game by calling the init function. 

    Extra:
    7. If player rolls x2 6's in a row they lose their entire score
    8. Allow user to input their max value.
*/

// ########################################################
// ********* Define the variables outside of any functions so they can be accessed by all (globally) *********

let scores, roundScore, activePlayer, gamePlaying, finalScore, previousDiceRoll, currentDiceRoll;

init();

// 1. When user clicks on the roll button 

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
        // 1. Get a random number (1-6)
        let dice = Math.floor(Math.random() * 6 + 1);

        if (currentDiceRoll) {
            previousDiceRoll = currentDiceRoll;
            currentDiceRoll = dice;
        } else {
            previousDiceRoll = 0;
            currentDiceRoll = dice;
        }

        console.log(dice);
        console.log('previous dice roll:' + previousDiceRoll);
        console.log('current dice roll:' + currentDiceRoll);

        // 2. Display the random number
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = '/src/assets/dice-' + dice + '.png';


        if (currentDiceRoll === 6 && previousDiceRoll === 6) {
            previousDiceRoll = 0;
            currentDiceRoll = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
            previousDiceRoll = 0;
            currentDiceRoll = 0;
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add round score to the players total score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        // Check if player has won (ie >= 100)
        if (scores[activePlayer] >= finalScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false
        } else {
            nextPlayer();
            previousDiceRoll = 0;
            currentDiceRoll = 0;
        };

    }

});


// document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-new').addEventListener('click', init);



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function setFinalScore() {
    let finalScoreInput = document.querySelector('.final-score').value;
    if (finalScoreInput) {
        finalScore = finalScoreInput
    } else {
        finalScore = 100;
    }
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    setFinalScore();
    previousDiceRoll = 0;
    currentDiceRoll = 0;


    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}