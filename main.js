
document.getElementById('bold-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild'); 
    // let isBold = false;
    
    inputFieldElement.style.fontWeight = 'bold';
    // if(!isBold){
    //     inputFieldElement.style.fontWeight = 'bold';
    //     isBold = true;
    // }
    // else{
    //     inputFieldElement.style.fontWeight = 'normal';
    //     isBold = false;
    // }
    // //inputFieldElement.removeAttribute
});


document.getElementById('italic-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.style.fontFamily = 'sens sarif';
})
document.getElementById('undderline-btn').addEventListener('click',function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.style.textDecoration = 'underline';
});

document.getElementById('text-start-btn').addEventListener('click', function(){
    const inputFieldElement = document.getElementById('input-feild');
    inputFieldElement.style.textAlign = 'start';
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

