console.log('This is where the Magic Happens')

const output = document.querySelector('.output')
const buttons = document.querySelectorAll('.number')
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equals')

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
        console.log('button was clicked')
        output.innerText += buttons[i].innerText;
    });
}
console.log(buttons)

function clearAll(){
    output.innerText = ''
}
clear.addEventListener('click', clearAll)

// write a function that calculates the string that is on the screen.
// Add an EventListener on the equal button that runs the calculation function.

function calculates(){
    output.innerText = ''
}
clear.addEventListener('click', calculates)