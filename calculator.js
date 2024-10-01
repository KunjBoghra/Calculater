let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');


let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);  
            input.value = string;
        }  

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }else if (e.key === 'Enter') {
            string = eval(string);
            input.value = string;
          }
        
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string; 
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        } 


    })
})


// // // Add keyboard support
// document.addEventListener('keydown', (event) => {
//   // Check if the pressed key is a number or operator
//   if (event.key.match(/^[0-9\+\-\*\/\.]$/)) {
//     string += event.key;
//     input.value = string;
//   }

//   // Check if the pressed key is the Enter key (calculate result)
//   else if (event.key === 'Enter') {
//     string = eval(string);
//     input.value = string;
//   }

//   // Check if the pressed key is the Backspace key (delete last character)
//   else if (event.key === 'Backspace' || 'delete') {
//     string = string.substring(0, string.length-1);
//     input.value = string;
//   }

//   // Check if the pressed key is the Escape key (clear input field)
//   else if (event.key === 'Escape') {
//     string = "";
//     input.value = string;
//   }
// });