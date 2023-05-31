'use strict'

const display = document.getElementById('display');
const keys = document.querySelectorAll('[id*=key]');
const oprators = document.querySelectorAll('[id*=op]');

let newNumber = true;
let opSelected;
let prevNumber;

const thereIsOp = () => opSelected !== undefined;

const calc = () =>{
    if(thereIsOp()){
        const currentNumber = parseFloat(display.textContent.replace(',','.'));
        newNumber = true;
        //const result = eval (`${prevNumber}${opSelected}${currentNumber}`) - Substitui tos os "if" abaixo
        if(opSelected == '+'){
            attDisplay(prevNumber + currentNumber);
        }else if(opSelected == '-'){
            attDisplay(prevNumber - currentNumber);
        }else if(opSelected == '/'){
            attDisplay(prevNumber / currentNumber);
        }else if(opSelected == '*'){
            attDisplay(prevNumber * currentNumber);
        }       
    }
}

const attDisplay = (txt) =>{
    if(newNumber){
        display.textContent = txt.toLocaleString('BR');
        newNumber = false;
    }else{
        display.textContent += txt.toLocaleString('BR');    
    }  
}

const addNumber = (event) => attDisplay(event.target.textContent);  

keys.forEach(key => key.addEventListener('click', addNumber));



const addOp = (evento)  => {
    if(!newNumber){
        calc();
        newNumber = true;
        opSelected = evento.target.textContent;
        prevNumber = parseFloat(display.textContent.replace(',','.'));
    }
}
oprators.forEach(op => op.addEventListener('click', addOp));

const activeCalc = () =>{
    calc();
    opSelected = undefined;
}
document.getElementById('equal').addEventListener('click', activeCalc);

const clearDisplay = (event) => {
    display.textContent = ''
}
document.getElementById('clearDisplay').addEventListener('click', clearDisplay);

const clearCalc = (event) =>{
    clearDisplay();
    newNumber = true;
    prevNumber = '';
    currentNumber = '';
    opSelected = undefined;
}
document.getElementById('clearCalc').addEventListener('click', clearCalc);

const bkp = () =>{
    display.textContent = display.textContent.slice(0, -1) //inicia do 0 e retira o ultimo da direita   
}
document.getElementById('backspace').addEventListener('click', bkp);


const changeSign = () => {
    newNumber = true;
    attDisplay(display.textContent * -1)
}
document.getElementById('change').addEventListener('click', changeSign);

const existDecimal = () => display.textContent.indexOf(',') !== -1;
const existValue = () => display.textContent.length > 0;

const transfomDecimal = () => {
    if(!existDecimal()){
        if(existValue()){
            attDisplay(',')
        }else{
            attDisplay('0,');
        }
    }
} 
document.getElementById('dot').addEventListener('click', transfomDecimal);

const keyMap = {
    '0' :   'key0',
    '1' :   'key1',
    '2' :   'key2',
    '3' :   'key3',
    '4' :   'key4',
    '5' :   'key5',
    '6' :   'key6',
    '7' :   'key7',
    '8' :   'key8',
    '9' :   'key9',
    '/' :   'op-divide',
    '*' :   'op-mult',
    '-' :   'op-sub',
    '+' :   'op-plus',
    '=' :   'equal',
    'Enter'     :   'equal',
    'Backspace' :   'backspace',
    'c'         :   'clearDisplay',
    'Escape'    :   'clearCalc',
    ','         :   'dot',
    'Control'   :   'change'
}

const mapingKeyboard = (event) => {
    const key = event.key;
    const thereAreKey = () => Object.keys(keyMap).indexOf(key) !== -1; //verifica se uma das chaves do obejto keyMap tem a key pressionada pelo usuário
    if (thereAreKey()){
    document.getElementById(keyMap[key]).click();
    }
}
document.addEventListener('keydown', mapingKeyboard);


