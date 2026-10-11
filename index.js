//1
let arrayVacio = [];
//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3
let arrayNumerosPares = [0, 2, 4, 6, 8];
//4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
//5
function suma(a, b) {
    return a + b;
}
//6
function potenciacion(a, b) {
    return Math.pow(a, b);
}
//7
function separarPalabras(inString) {
    return inString.split(" ");
}
//console.log(separarPalabras("hello world"));
//8
function repetirString(inString, inNum) {
    return inString.repeat(inNum);
}
//console.log(repetirString("hello world ", 2));
//9
function esPrimo(inNum) {
    if (inNum <= 1) return false;
    if (inNum === 2) return true;
    if (inNum % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(inNum); i += 2) {
        if (inNum % i === 0) return false;
    }
    return true;
}
//10
function ordenarArray(inArray) {
    return inArray.sort();
}
//console.log(ordenarArray([0, 2, 1, -5]));
//11
function obtenerPares(inArray) {
    return inArray.filter((number) => {
        return number % 2 === 0;
    });
}
//console.log(obtenerPares([0, 2, 1, -5]));
//12
function pintarArray(inArray) {
    return "[" + inArray.join(", ") + "]";
}
//console.log(pintarArray([0, 2, 1, -5]));
//13
function arrayMapi(inArray, func) {
    //return inArray.map(func) <= better
    let outArray = [];
    inArray.forEach((element, index) => {
        outArray[index] = func(element);
    });
    return outArray;
}
//console.log(arrayMapi([0, 2, 1, -5], (num) => { return num + 1;}));
//14
function eliminarDuplicados(inArray) {
    return Array.from(new Set(inArray));
}
//console.log(eliminarDuplicados([0, 2, 1, -5, 2, 0]));
//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
//16
let holaMundo = ["Hola", "Mundo"];
//17
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
//19
function multiplicacion(a, b) {
    return a * b;
}
//20
function division(a, b) {
    return a / b;
}
//21
function esPar(inNum) {
    return inNum % 2 === 0;
}
//22
function resta(a, b) {
    return a - b;
}
let arrayFunciones = [suma, resta, multiplicacion];
//23
function ordenarArray2(inArray) {
    return inArray.sort().reverse();
}
//console.log(ordenarArray2([0, 2, 1, -5]));
//24
function obtenerImpares(inArray) {
    return inArray.filter((num) => {
        return !esPar(num);
    });
}
//console.log(obtenerImpares([0, 2, 1, -5]));
//25
function sumarArray(inArray) {
    return inArray.reduce((accumulator, num) => {
        return accumulator + num;
    }, 0);
}
//console.log(sumarArray([1, 2, 3]));
//26
function multiplicarArray(inArray) {
    return inArray.reduce((accumulator, num) => {
        return accumulator * num;
    }, 1);
}
//console.log(multiplicarArray([2, 3, 4]));