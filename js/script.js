let streak = 0;

const resultDisplay = document.getElementById('result');
const headsButton = document.getElementById('heads');
const tailsButton = document.getElementById('tails');

const COIN_SIDES = ['表', '裏'];

function coinToss() {
    return Math.floor(Math.random() * 2);
}

function checkGuess(playerGuess) {
    const result = coinToss();
    const resultText = COIN_SIDES[result];

    if (playerGuess === result) {
        streak++;
        resultDisplay.textContent = `結果: ${resultText} - あたり！ 現在の連続当たり回数: ${streak}`;
    } else {
        streak = 0;
        resultDisplay.textContent = `結果: ${resultText} - はずれ。連続当たり回数: ${streak}`;
    }

    if (streak === 3) {
        alert("YOU WIN");
        streak = 0; 
    }
}

headsButton.addEventListener('click', () => checkGuess(0));
tailsButton.addEventListener('click', () => checkGuess(1));
