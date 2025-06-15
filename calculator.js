const display = document.getElementById('display');
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    const value = button.dataset.value
    if (value !== undefined) {
        button.addEventListener( 'click', ()=>{
            display.value += value;
        } )
    }
});


//clear display

document.getElementById('clear').addEventListener('click', ()=>{
    display.value=''
})



//eval

document.getElementById('equals').addEventListener('click', ()=>{
    try {
        display.value = eval(display.value);
    }catch{
        display.value='error'
    }
})