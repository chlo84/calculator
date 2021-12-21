console.log('This is where the Magic Happens')

const output = document.querySelector('.output')

const button = document.querySelector('button');

const buttons = document.querySelectorAll('button')



for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
        console.log('button was clicked')
        output.innerText += buttons[i].innerText;
    });
}
console.log(buttons)

