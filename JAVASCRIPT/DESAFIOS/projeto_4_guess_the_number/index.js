let computerNumber;
let userNumbers = [];
let userTentativas = 0;
let tentativas = 10;
let lose = false;

function init(){
    computerNumber = Math.round(Math.random() * 100 + 1);
    lose = false;
}
function restart(){
    window.location.reload();
}

function guess(){
    let number = Number(document.getElementById('inputBox').value);
    userNumbers.push(number);
    compareNumbers(number);
}

function compareNumbers(number){
    if(userTentativas < tentativas && !lose){
        if(number < computerNumber){
            document.getElementById('result').innerHTML = 'Your number is lower than computer number!';
            document.getElementById('guesses').innerHTML = userNumbers.join(', ')
            document.getElementById('inputBox').value = '';
        } else if(number > computerNumber){
            document.getElementById('result').innerHTML = 'Your number is higher than computer number!';
            document.getElementById('guesses').innerHTML = userNumbers.join(', ')
            document.getElementById('inputBox').value = '';
        } else {
            document.getElementById('result').innerHTML = 'You did it! Congratulations!';
            document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly')
            init();
        }
        userTentativas++;
    } else {
        document.getElementById('result').innerHTML = 'You lose!!!!\nNumber: ' + computerNumber;
        document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly');
        lose = true;
    }
    document.getElementById('attempts').innerHTML = userTentativas;
}