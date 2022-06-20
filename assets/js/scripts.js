
/* 
* Desafio Javascript Contador 
*/


var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementsByTagName('button')[0].disabled = true;
document.getElementsByTagName('button')[0].classList.add('disabled');

document.getElementsByTagName('button')[0].addEventListener("click", () => {

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

 /*    if (currentNumber < 0) {
        document.getElementById('currentNumber').classList.add('color')
    } */

    if (currentNumber < 10 ) {
        document.getElementsByTagName('button')[1].disabled = false;
        document.getElementsByTagName('button')[1].classList.remove('disabled');   
    }

    if (currentNumber <= 0) {

        document.getElementsByTagName('button')[0].disabled = true;
        document.getElementsByTagName('button')[0].classList.add('disabled');

        
    }

})


document.getElementsByTagName('button')[1].addEventListener("click", () => {

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

   /*  if(currentNumber >= 0) {
        document.getElementById('currentNumber').classList.remove('color')
    } */

    if(currentNumber >= 10) {
        document.getElementsByTagName('button')[1].disabled = true;
        document.getElementsByTagName('button')[1].classList.add('disabled');
    } 

    if(currentNumber > 0) {
        document.getElementsByTagName('button')[0].disabled = false;
        document.getElementsByTagName('button')[0].classList.remove('disabled');
    }
})


