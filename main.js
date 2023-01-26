//Declare a function
function unaFuncion() {
    console.log(1);
    console.log(2);
    console.log(3);
}
//Invoke a function
unaFuncion();
function saludo() {
    //Only print 1234567890
    console.log(1234567890);
    return "Hola Mundo"
}
//saludo();
function saludoDos() {
    //Only print 1234567890
    console.log(1234567890);
    return "Hola Mundo"
}
const saludoV2 = saludo();
//Print 1234567890 and Hola Mundo
console.log(saludoV2);
//Math functions
function suma(a, b) {
    return a + b;
}
const resultado = suma(5, 10);
console.log("El resultado de la suma es: "+resultado);
//Anonymous function
const anonymousFunction = function () {
    console.log("I am an Anonymous Function :D");
}
//Call an anonymousFunction
anonymousFunction();
//Arrow Function
const arrowFunction = () => {
    console.log("I am an Arrow Function");
}
//Call an arrowFunction
arrowFunction();