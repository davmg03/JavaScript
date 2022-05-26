//2.- Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números
let X1 = prompt("¿Cual es el Primer Numero del 1 al 100?");
if(X1 < 1 || X1 >100){
    alert("Ingresa de nuevo el Numero");
    let X1 = prompt("Ingresa el Primer Numero");
}
let X2 = prompt("¿Cual es el Segundo Numero del 1 al 100?");
if (X2 < 1 || X2 >100) {
    alert("Ingresa de nuevo el Segundo Numero");
    let X2 = prompt("Ingresa el Segundo Numero");
}
let X3 = prompt("¿Cual es el Tercer Numero del 1 al 100?");
if(X3 < 1 || X3 >100){
    alert("Ingresa de nuevo el Tercer Numero");
    let X3 = prompt("Ingresa el Tercer Numero");
}
X1=parseFloat(X1);
X2=parseFloat(X2);
X3=parseFloat(X3);
if( (X1 < X2) && (X1 < X3) ){
    alert("El Numero Menor es "+ X1);
}
else if( (X2 < X1) && (X2 < X3) ){
    alert("El Numero Menor es "+ X2);
}
else {
    alert("El numero es Menor es"+ X3);
}