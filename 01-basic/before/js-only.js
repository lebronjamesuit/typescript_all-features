
const a = document.getElementById('num1');
const b = document.getElementById('num2');
const button = document.querySelector('button'); // select the first element of button.

button.addEventListener('click', function () {
    console.log(' Im clicking the button');
    console.log(add(a.value, b.value));
});


function add(a, b){
  return a + b; 
}



