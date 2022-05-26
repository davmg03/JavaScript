//5.-Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos.
//Se ingresa los Numeros
let a = prompt("Ingresa el Primer Numero");
let b = prompt("Ingresa el Segundo Numero");
let c = prompt("Ingresa el Tercer Numero");
//Se convierten el Texto de entrada a Float
a = parseFloat(a,10);
b = parseFloat(b,10);
c = parseFloat(c,10);
//Imprimo en Consola la Suma de Todo para Verificar que todo esta bien
console.log(a + b + c);
//Las Condiciones del Problema para verificar cual es la suma
if( (b+c) == a ){
    alert("El Primer Numero "+ a +" es la Suma de "+ b +" y "+ c);
}
else if( (c+a) == b ){
    alert("El Segundo Numero "+ b +" es la Suma de "+ c +" y "+ a);
}
else if( (a+b) == c ){
    alert("El Tercer Numero "+ c +" es la Suma de "+ a +" y "+ b);
}
else{
    alert("Ningun numero es multiplo de 3");
}