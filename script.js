/*

Click roll dice and generate a random number and set to dice value

*/


document.querySelector('.btn-roll').addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber)

    let domDice = document.querySelector('.dice');
    domDice.src = './src/assets/dice-' + randomNumber + '.png ';

})