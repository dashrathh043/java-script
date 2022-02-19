`use strict`;
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener(
    'click',
    function() {
        const guess = Number(document.querySelector('.guess').value);
        var score = Number(document.querySelector('.score').textContent);
        console.log("score = " + score)
        if (!guess) {
            document.querySelector('.message').textContent = 'No number'
        } else if (guess == number) {
            if (score > 0) {
                const highscore = document.querySelector('.highscore').textContent
                document.querySelector('.message').textContent = 'Correct...'
                document.querySelector('.highscore').textContent = score
                document.querySelector('body').style.backgroundColor = '#60b347'
            } else {
                document.querySelector('.message').textContent = 'you lost the game!'
            }

        } else if (guess > number) {
            if (score > 0) {
                score = Number(document.querySelector('.score').textContent);
                document.querySelector('.message').textContent = 'large....'
                document.querySelector('.score').textContent = score - 1
            } else {
                document.querySelector('.message').textContent = 'you lost the game!'
            }

        } else if (guess < number) {
            if (score > 0) {
                score = Number(document.querySelector('.score').textContent);
                document.querySelector('.message').textContent = 'small....'
                document.querySelector('.score').textContent = score - 1
            } else {
                document.querySelector('.message').textContent = 'you lost the game'

            }
        }

    });


document.querySelector(".again").addEventListener(
    'click',
    function() {
        document.querySelector('.number').textContent = '?';
        document.querySelector('.highscore').textContent = '0';
        document.querySelector('.score').textContent = '20';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.guess').value = '';
    });