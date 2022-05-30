//3.- Realizar un algortimo para adivinar un número entre el 1 y el 100 en el menor número.
/*let c;
while (c <=10){
    alert("Piensa en un numero del 1 al 100 ");
    alert("A ese numero multipliquelo por 5");
    alert("Despues sumale 12");
    alert("Luego multipliquelo por 10");
    alert("despues sumele 5");
    alert("Multiplique por 2");
let num =parseFloat(prompt("¿Que numero te dio de resultado"));
if (resultado > 1 && resultado < 11000){
    console.log("Tu numero pensado es"+ resultado);
}}*/
function adivinar (){
    let superior = 100;
    let inferior = 0;
    let noEncontrado = true;
    while(noEncontrado){
        let mid = parseInt(inferior + ((superior - inferior) / 2));
        //console.log(mid);
        //console.log(((superior - inferior) / 2));
        if (((superior - inferior) / 2)< 1){
            noEncontrado=false;
            alert("Tu numero es el " + (parseInt(mid)+1));
            break;
        }//if
        let res = confirm("Tu numero es menor o igual a "+ mid);
        if (res){
            superior = mid;
        }
        else{
            inferior = mid;
        }
        //console.log(inferior, superior);
    }
}//adivinar
adivinar();