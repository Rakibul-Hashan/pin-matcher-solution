function getPin(){
    const pin = Math.round(Math.random()*10000); 
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        console.log(pin);
        return getPin();
    }
}
function generatePin(){
    // console.log(getPin())
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    
}

document.getElementById('keypad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    if(isNaN(number)){
       if(number == 'C'){
        typedNumbers.value = ' ';
       }
    }else{
        const oldNumber = typedNumbers.value;
        const newNumber = oldNumber + number;
        typedNumbers.value = newNumber;
    }
        
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const notifySection = document.getElementById('notify-section');
    const notifyFail = document.getElementById('notify-fail');
    const notifySuccess = document.getElementById('notify-success');
    if( pin == typedPin){
        notifyFail.style.display = 'none';
        notifySuccess.style.display = 'block';

    }else{
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
       
    }
}