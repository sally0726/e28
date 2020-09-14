let resetBtn = document.querySelector('#restart');
let confirmBtn = document.querySelector('#confirm');
let guessLeftDisp = document.querySelector('#num-guesses');
let msgDisp = document.querySelector('#msg');
let history = document.querySelector('#history');
let historyList = document.querySelector('#history-list');
var target, num_guesses;
var historyGuess;

function init() {
    target = Math.round(Math.random() * 10000);
    num_guesses = 13;
    guessLeftDisp.innerHTML = num_guesses;
    msgDisp.innerHTML = '';
    history.style.display = 'none';
    historyList.innerHTML = '';
    historyGuess = [];
    // console.log(target)
}

function guess() {
    history.style.display = 'block';

    let ans = document.querySelector('input[name="guess"]').value;
    // console.log(ans);
    for (var i = 0; i < historyGuess.length; i++) {
        if (ans == historyGuess[i]) {
            msgDisp.innerHTML = "Come on, try another one!";
            return;
        }
    }

    if (ans > target) {
        msgDisp.innerHTML = 'Try a smaller number!';
    } else if (ans < target) {
        msgDisp.innerHTML = 'Try a larger number!';
    } else {
        msgDisp.innerHTML = 'Spot on! Good job!';
    }
    num_guesses--;
    guessLeftDisp.innerHTML = num_guesses;
    
    historyGuess.push(ans);
    historyList.innerHTML = historyGuess.join();
}

confirmBtn.addEventListener('click', guess);
resetBtn.addEventListener('click', init);
init();
