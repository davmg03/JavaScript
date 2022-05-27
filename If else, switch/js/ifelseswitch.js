//NO USAR EN PRODUCCION
//USO EXCLUSIVO DE PRUEBAS

//Mensaje de Alerta - Ok
//alert("Hola");

//Confirmación //Okay-Cancel
//confirm("¿Estas de acuerdo?")

//Pregunta - Cuadro de texto - Okay
//prompt("¿Cual es tu Nombre");


/*

let chilaquiles = confirm("¿Te gusta la amborgeza?");
console.log(chilaquiles);

if(chilaquiles){
    alert("a mi tambiem me guztan laz amborguezas uwu");
}

else if(confirm("y la papas?0")){
    alert("k rico");
}

else{
    alert("¿po k no te guztan?");
}

*/
/*
COMPARADORES

== igual
> mayor que
>= mayor o igual que
< menor que
< menor o igual que
!= diferente

*/



//if Ternario
//Condición) ?verdadero:falso;
//let mensaje = (chilaquiles)?"Felicidades!!" : "Deberias probarlos!!";
//let mensaje = (chilaquiles)?
//


//let chilaquiles = prompt("¿Que chilaquiles te gustan?", "verdes rojos");
/*switch(chilaquiles){
    case "verdes":
        alert("a mi tambien");
        break;
    case "rojos":
        alert("kuacala");
        break;
    default:
        alert("mmmm pruebalos bb");
        break;
}*/

/*switch(chilaquiles){
    case "verdes":
    case "rojas":
    case "mole":
    case "potosinas":
        alert("Invita !!!");
        break;
    case "mineras":
        alert("¿Esas cómo son?");
        break;
    default:
        alert("Deberias de probarlas buajaja");
        break;
}*/

// === estrictamento igual// compara dato y el tipo de dato
//!== esctrictamentr diferente 

let a = 7;
let b = '7';
console.log ( a == b );
console.log ( a > b );
console.log ( a >= b );
console.log ( a < b );
console.log ( a <= b );
console.log ( a != b );
console.log ( a !== b );

//Operadores logicos 
//AND - Y // &&
//OR - O // ||
//NOT - No // !
console.clear();
a = 11;
b = 7;
c = 8;
console.log ((a>b)&& (a!=b));

console.log((a>b)||(a!=b));

console.log (! (a>b));

console.log( (a>b)&&(a!=b) &&(a<c));

console.log( (a>b)||(a!=b) &&(a<c));
 
console.log( ((a>b)&&(a!=b)) ||(a<c));
