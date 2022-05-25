let x = 3.141592;
console.log("Prueba de JavaScript desde main");

document.getElementById("encabezado").innerHTML="Fundamentos " + x;

//string
let nombre = "Omar";
console.log(typeof (nombre));
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());
console.log(nombre);
//number
let edad = 24;
console.log(typeof (edad));
//boolean
let chilaquiles_verdes = true;
console.log(typeof (chilaquiles_verdes));
//undefined
let equipoFutbol;
console.log(typeof (equipoFutbol));
//null
let gradudado_Generation = null;
console.log(typeof (gradudado_Generation));
//object
let calificaciones = {};
console.log(typeof (calificaciones));

//console.log ("La edad de", nombre, " es: ", edad);
console.log ("La edad de"+ nombre + " es: " + edad);

edad = "24.5";
console.log (typeof(edad));
edad = parseFloat(edad) +1;
console.log(edad);
console.log(typeof(edad));

console.log(parseInt(nombre));

console.log(isNaN(nombre));

console.log(
    typeof(edad.toString())
    );

console.log("El resultado es:" + true);

console.log(17 + null);
console.log("17"+ null);
console.log("10"+1);
console.log("21"-1);
console.log("14"*"2");

///Operadores 
// + Suma o concatenacion 
// - resta 
// * Multiplicacion
// / Division 
// % Residuo de la division 10/3 -> 1
// ++ incremento en uno 
// -- decremento  en uno 
// Math.sqrt(9) Raiz Cuadrada
// ** Math.pow(base, exponente) Elevar un numero 
// += Operador de incremento y asignacion
// -= Operador de decremento y asignacion
// *= Operador de multiplicacion y asignacion
// /= Operador de division y asignacion
// %= Operador de residuo y asignacion


console.log(Math.pow(5,3));
console.log(5**3);

console.clear();
edad = 24;
console.log(edad);
edad = edad += 1;
edad += 1;
edad ++;
console.log(edad);
console.log(++edad);
console.log(edad);
edad = edad - 1;
console.log(edad);
console.log(edad--);

console.clear();
// Precedencia de operadores 
// (). []
// * / %
// + -

console.log(
    5+5*2
);

console.log(
    50 / (5*2)
);

let a=1;
let b=3;
let c=-10;

let s = Math.sqrt ( (b**2) - (4*a*c));
let x1= ( -b + s)/ (2*a) ;
let x2= ( -b - s)/ (2*a) ;
console.log(x1);
console.log(x2);

console.log(x1);
console.log(x2);








//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt