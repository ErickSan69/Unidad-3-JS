var p = prompt("¿Cual es tu nombre?");
var q = parseInt(prompt("¿Cuanto dinero necesitas?(Maximo 50000)"));
var m = parseInt(prompt("¿A cuantos plazos deseas pagarlos?(Meses)"));

function prestamo(nombre, Dinero, Meses){
    var prestamo = {
        nombre: nombre,
        Dinero: Dinero,
        Meses: Meses,
    }
    return prestamo;
}

var z = parseInt(prompt("¿Cuantos meses va a pagar?"));
var w = parseInt(prompt("¿Cuanto dinero va a pagar?"));

function restarnumeros(q, w){
    var resta = q - w;
    return resta;
}
function restarmeses(m, z){
    var restameses = m - z;
    return restameses;
}

console.log(prestamo(p, q, m));
console.log("Te faltaN:",restarnumeros(q, w) + "Pesos", "Te restan:",restarmeses(m, z) + "Meses");
