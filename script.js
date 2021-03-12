var col1 = document.querySelector('.color1');
var col2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
var body = document.getElementById('gradient');

function setColor(){
    body.style.background = 
    'linear-gradient(to right, '+
    col1.value+', ' +
    col2.value+')';
    h3.textContent = body.style.background;
}

col1.addEventListener('input', setColor);
col2.addEventListener('input', setColor);

function win(bool){
    return bool;
}

var gano = win(false) ? 'Ha ganado' : 'Ha perdido';

