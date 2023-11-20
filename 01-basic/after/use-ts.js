var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button2 = document.querySelector('button'); // select the first element of button.
function themhaiso(a, b) {
    return a + b;
}
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener('click', function () {
    console.log('first typescript');
    var result = themhaiso(parseInt(input1.value), parseInt(input2.value));
    console.log(result);
});
