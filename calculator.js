var screen = document.getElementById('screen');

buttons = document.querySelectorAll('button');

var screenValue = "";

for(items of buttons){
    items.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
       
         if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
            sol = eval(screenValue);
            screenValue = sol;
            // screenValue += screen.value;
            
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}