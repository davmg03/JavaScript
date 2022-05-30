//Encontrar los primero numeros pares entre el 1 y el 100

/*(1%2) == 0
(2%2) == 0
console.log("El número 2 es par");*/
//      index     ; comparacion        ;  incremento
/*for (let index = 0; index <array.length; index++){
    const element = array [index];
}*/

/*for (let index = 1; index <= 100; index++){
    if ( (index %2) ==0 ){
        console.log (index + "Es un número Par ");
    }//if   
}*/

//Hacer un ciclo que vaya de 5 en 5 entre el 1 y el 100;

/*for (let index = 5; index <= 100; index += 5){
        console.log (index);
    } */

/*for (let index = 100; index >= 5; index -= 5){
        console.log (index);
    }*/
    
    // Estructura de while (condicion){}

    //Encontrar los primero numeros pares entre el 1 y el 100
    /*let index = 1;
    //comparación
    while (index <=100){
        if ((index % 2) == 0){
            console.log(index + " Es el número Par ");
        } //if
        //incremento
        index ++;
    }//while*/

let num;
while ( isNaN (num) || (num<1 || num>100) ){
    num = parseInt( prompt("Escribe un número entre el 1 y el 100", ""));
    console.log (num);
    console.log ((num>=1 && num<=100));
}


