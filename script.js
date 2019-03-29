// Call random number function following event listener on button

document.querySelector('.btn-roll').addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber);

    // Change the dice image 

    let dice = document.querySelector('.dice');

    dice.src = './src/assets/dice-' + randomNumber + '.png';

})