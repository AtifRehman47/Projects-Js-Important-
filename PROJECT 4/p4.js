// let random number :-

let RandomNumber =parseInt (Math.random()*100 +1);
let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessfield');
let guessSlot = document.querySelector('.guesses');
let Remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let StartOver = document.querySelector('.lowOrHi');

let p = document.querySelector('p');

let PrevGuess = [];
let numGuess = 1;
let PlayGame = true;

if (PlayGame) {
       submit.addEventListener('click' , function (event) {
              event.preventDefault()
              let guess =parseInt(userInput.value)
              console.log(guess);
              
              ValidateGuess(guess)
       })
}

function ValidateGuess(guess) {
       if (isNaN(guess)) {
              alert('please inter a valid number')
       }else if (guess < 1) {
              alert('please inter a valid number 1')
       }else if (guess >100) {
              alert('please inter a valid number')
       }else{
              PrevGuess.push(guess)
              if (numGuess === 11) {
                     displayGuess(guess)
                     displayMassage(`Game over . Random number was ${RandomNumber}`)
                     EndGame()
              }else{
                     displayGues(guess)
                     CheckGuess(guess)
              }
       }
}

function CheckGuess(guess) {
       if (guess === RandomNumber) {
              displayMassage(`you guessed it right`)
              EndGame()
       }else if (guess < RandomNumber) {
              displayMassage(`number is too Low`)
       }else if (guess < RandomNumber) {
              displayMassage(`number is too high`)
       }
}

function displayGuess(guess) {
       userInput . value = ''
       guessSlot . innerHTML +=`${guess}`
       numGuess++
       Remaining.innerHTML = `${11-numGuess}`
}

function displayMassage(Message) {
       lowOrHi.innerHTML = `<h2>${Message}<h2/>`
}

function NewGame() {
       //
}

function EndGame() {
       //
}

