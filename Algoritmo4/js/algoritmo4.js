//4.- Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3.
//Se ingresa el Numero Entero
let X1 = prompt("Ingresa un Numero Entero entre 100 y 200");
//Validamos que el numero este entre 100 y 200, sino se vuelve a pedir el Numero
if(X1 < 100 || X1 >200){
    alert("Ingresa nuevamente, tu numero es incorrecto a las instrucciones");
    let X1 = prompt("Ingresa un Numero Entero");
}
//Se hace la validación para saber si es multiplo de 3
if((X1 % 3) == 0){
    alert("Si es Multiplo de 3, El Numero "+ X1);
}
else{
    alert("No es Multiplo de 3, El Numero "+ X1);
}