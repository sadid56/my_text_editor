
// document.getElementById('bold-btn').addEventListener('click', function(){
//     const inputFieldElement = document.getElementById('input-feild'); 
    
    
//     inputFieldElement.style.fontWeight = 'bold';
  
    
// });
// document.getElementById('bold-btn').addEventListener('click', function(){
//     const inputFieldElement = document.getElementById('input-field'); 
//     const isBold = inputFieldElement.style.fontWeight === 'bold';
    
//     inputFieldElement.style.fontWeight = isBold ? 'normal' : 'bold';
// });
// document.getElementById('bold-btn').addEventListener('click', function(){
//     const inputFieldElement = document.getElementById('input-field'); 
//     inputFieldElement.style.fontWeight = 'bold';
// });
document.getElementById('bold-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild'); 
    inputFieldElement.classList.toggle('bold-text'); // text bold in css!
});



document.getElementById('italic-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.classList.toggle('italic-font');
})

document.getElementById('undderline-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.classList.toggle('underline')
})
document.getElementById('text-start-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.style.textAlign = 'start';
})
document.getElementById('text-center-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.style.textAlign = 'center';
})
document.getElementById('text-end-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.style.textAlign = 'end';
});



document.getElementById('color-input').addEventListener('input', function(){
    const colorInputElement = document.getElementById('color-input');
    const colorInput = colorInputElement.value;

    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.style.color = colorInput;
});


document.getElementById('number-input').addEventListener('input', function(){
    const numberInputFieldElement = document.getElementById('number-input');
    const numberInputField = numberInputFieldElement.value + 'px';

    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.style.fontSize = numberInputField;
})

//! clear all
document.getElementById('clear-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.value = '';
})
 


//! font family
document.getElementById('carosive-font').addEventListener('click', function(){
    
    const inputFieldElement = document.getElementById('input-feild'); 
    inputFieldElement.classList.toggle('cursive');
})
document.getElementById('tilt-prism').addEventListener('click', function(){
    
    const inputFieldElement = document.getElementById('input-feild'); 
    inputFieldElement.classList.toggle('tilt-prism-font');
})
document.getElementById('barriecito').addEventListener('click', function(){
    
    const inputFieldElement = document.getElementById('input-feild'); 
    inputFieldElement.classList.toggle('barriecito-font');
})
document.getElementById('playfair').addEventListener('click', function(){
    
    const inputFieldElement = document.getElementById('input-feild'); 
    inputFieldElement.classList.toggle('playfair-font');
})
document.getElementById('Pacifico').addEventListener('click', function(){
    
    const inputFieldElement = document.getElementById('input-feild'); 
    inputFieldElement.classList.toggle('Pacifico-font');
})
document.getElementById('Rubik').addEventListener('click', function(){
    
    const inputFieldElement = document.getElementById('input-feild'); 
    inputFieldElement.classList.toggle('Rubik-font');
})
