

let input1 = document.getElementById('num1')! as HTMLInputElement;
let input2 = document.getElementById('num2')! as HTMLInputElement;
let button2 = document.querySelector('button')! ; // select the first element of button.


function themhaiso(a: number, b: number){

    return a + b;

}

button2?.addEventListener('click', function(){
    console.log('first typescript');

   let result = themhaiso(parseInt(input1.value), parseInt(input2.value));
   console.log(result);
});

 
