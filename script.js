// Create a bunch of divs for Buttons that will hold numbers and operators.

const output = document.querySelector('.output')
const buttons = document.querySelectorAll('.number')
const clear = document.querySelector('#clear')
const equal = document.querySelector('.calculates')

//Create a for loop that calls each function
//Add an EventListener to

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

// Write a function that calculates the string that is on the screen.
// Add an EventListener on the equal button that runs the calculation function.
  
function calculates(result){
    for(let i = 0; i < result.length; i++){
        if(result[i]==='+'){
            let add = result.split('+')
            return(parseInt(add[0])+parseInt(add[1]))
        }else if(result[i]==='-'){
            let subtract = result.split('-')
            return(parseInt(subtract[0])-parseInt(subtract[1]))
        }else if (result[i]==='*'){
            let multiply = result.split('*')
            return(parseInt(multiply[0])*parseInt(multiply[1]))
        }else if(result[i]==='/'){
            let divide = result.split('/')
            return(parseInt(divide[0])/parseInt(divide[1]))
        }
    } 
}

function equalButton(){
    output.innerText = calculates(output.innerText)
}


equal.addEventListener('click', equalButton)