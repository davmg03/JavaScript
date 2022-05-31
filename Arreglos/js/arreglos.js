// Variablle para almacenar mas de un dato 
// arreglo, coleccion ordenada de datos 
// Conjunto de datos que tienen algo en comun
/*let nombres = new Array();
console.log(typeof(nombre));*/
//console.log(typeof(nombres));

let nums = [18, 19, 101, 20, 200, 22];
console.log(nums);
nums.sort(function(a,b){
    return a - b;
});
console.log(nums);
/*nums.sort((a,b) => a-b);*/


//             0         1         2          3          4
let nombre = ["Liz", "Abraham", "Adrian", "Marihan", "Marihan","Maricela"]; // new Array();
console.log(nombre.join(", "));
let estados = "México, Guerrero, Guadalajara, Jalisco, Tlaxcala, Aguascalientes, Michoacan, Tamaulipas, Veracruz, Durango, Tabasco, Nuevo Leon, Baja California Norte, Baja California Sur";
let edosArray = estados.split(", ");
console.log(edosArray);

let heroe1= "Juan Bautista Pascacio Escutia y Martínez";
console.log(heroe1.length);
let arregloheroe1 = heroe1.split(" ");
console.log(arregloheroe1.length);
console.log(arregloheroe1[0]);
console.log(arregloheroe1[1]);


let nombresMayus = nombre.map ( element => element.toUpperCase());
console.log(nombresMayus);
console.log(nombre.pop());//elimina el ultimo elemento
console.log(nombre.push("Maricela"));//5 agrega un elemento 
console.log(nombre.shift());// Liz elimina el primer elemento 
console.log(nombre.unshift());//5
console.log(nombre.sort());//acomoda 
console.log (nombre);
console.log (nombre.indexOf("Jorge"));//-1
console.log (nombre.indexOf("Marihan"));
console.log (nombre.lastIndexOf("Marihan"));
//console.log (nombre.lastIndexOf("Marihan"));
/*for(let index = nombre.length-1 ;index >= 0; index--){
    console.log (nombre[index]);
}//inverso*/
/*console.log("while");
let index = nombre.length-1;
while(index >= 0 ) {
    console.log(nombre[index--]);
}//while inverso */
console.log ("do while");
let index = nombre.length-1;
do {
    console.log(nombre[index--]);//.toUpperCase()
}while (index >= 0 );//inverso*/

/*for(let index = 0; index < nombre.length; index++){
    console.log (nombre[index]);
}*/
/*let index = 0;
while(index < nombre.length) {
    console.log(nombre[index++]);
}//while*/
/*console.log("do - while")
let index = 0;
do {
    console.log(nombre[index++]);
}while (index < nombre.length);*/
/*console.log("forEach")
nombre.forEach(element => {
    console.log(element);
});*/
/*console.log("forEach")
nombre.forEach(nombre => {
    console.log(nombre);
});*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/*console.log("forEach")
nombre.forEach( (nombre, indice) => {
    console.log(indice, nombre);
});*/