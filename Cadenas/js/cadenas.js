// Strings = Cadenas de caracteres
//Comillas dobles
let address = "20 de Noviembre #500\" col. centro\" ";
console.log ((address));
//console.log (typeof(address));
//Comillas sencillas
let address_2 = '16 de Septiembre No.152\'col. centro\'' + address + 'Domicilio Conocido';
console.log ((address_2)) 
//console.log (typeof(address_2)) 
// backticks Alt96 o alt gr + llaves ``
let address_3 = `Republica de Uruguay #160 Dirección 1: ${address} Dirección 2: ${address_2} y Tenemos la Dirección #3`;
console.log(address_3);
console.log(address_3.length);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log(address_3.charAt(13));
let tmp_str = address_3.replaceAll("ú", "u").replaceAll("ó", "o").toLoWerCase();
console.log(tmp_str.indexOf("u"));

//console.log( address_3.indexOf("u"));

// Regular 

let reg