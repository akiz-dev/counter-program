charset="UTF-8";

// create and get variables inputs
let initialNumber = document.querySelector('#initNum');
let lastNumber = document.querySelector('#lastNum');
let stepNumber = document.querySelector('#step');

const countButton = document.getElementById('countBtn');
const resetButton = document.getElementById('resetBtn')
const display = document.getElementById('display');



countButton.addEventListener('click', () => {
    

    // validate inputs
    if(initialNumber.value.length === 0 || lastNumber.value.length === 0 || stepNumber.value.length === 0) {
        alert('[ERROR!] Put a some value')
    } else {
        // casting
        let initialNumberVal = Number(initialNumber.value);
        let lastNumberVal = Number(lastNumber.value);
        let stepNumberVal = Number(stepNumber.value);

        // set step automatic
        if(stepNumberVal === 0 ){
            alert('[ERRO!] Step 0 invalid, Start of STEP 1.') 
            stepNumberVal = 1;
        }

        
        if(initialNumberVal < lastNumberVal) {
            // increment
            for(let counter = initialNumberVal; counter <= lastNumberVal; counter += stepNumberVal){
                // console.log(counter);
                display.innerHTML += `${counter} \u{1F463} <br>`
            }
        } else {
            // decrement
            for(let counter = initialNumberVal; counter >= lastNumberVal; counter -= stepNumberVal) {
                // console.log(counter);
                display.innerHTML += `${counter} \u{1F463} <br>`
            }
            
        }
            display.innerHTML += ' END Program \u{1F3C1} <br>';

    }
});

console.log(
    // window.location.reload()
);

//reset program
resetButton.addEventListener('click', ()=>{
    initialNumber.value = '';
    lastNumber.value = '';
    stepNumber.value = '';
    display.innerHTML = '';
})


