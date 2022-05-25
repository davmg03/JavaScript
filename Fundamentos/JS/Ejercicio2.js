//Reglas para nombrar funciones y/o variables 
//1.- Sin caracteres especiales y/o espacios 
//2.- No comienzan con numeros 
//3.- No pueden repetirse
//4.- No puede usar palabras claves 
//5.- Pueden contener guion bajo _
//Recomendaciones 
//1.- Usar camelCase o snake_case para nombarlas
//2.- El nombre tiene que ver con loq ue hace
//3.- Usar parametros en lugar de repetir funciones
//4.- Que el nombre no sea demaciado largo

function formulaGeneral (a,b,c) {
let s = Math.sqrt ( (b**2) - (4*a*c));
let x1= ( -b + s)/ (2*a) ;
let x2= ( -b - s)/ (2*a) ;
console.log(x1);
console.log(x2);
}// formula general

function writePI(){
    console.log (Math.PI);
}//escribe pi 

function add(num1, num2){
    return num1 + num2;
}//add

formulaGeneral(1, 3, -10);
formulaGeneral(1, -4, 3);
writePI ();
let x = 256;
let y = 128;
let z = 64;
let res = add(x,y);
console.log(add(res, z));
console.log (add(add (25,40),12) );

const multiplay = function (a,b){
     return a*b;
};

console.log (multiplay (3,3));

//ECMAScript
//


