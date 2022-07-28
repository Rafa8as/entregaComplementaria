// Pido Nombre y apellido al ingreso del sitio//
let entrada = prompt ("ingrese su nombre y su apellido");
let salida = entrada + " " + "pudiste " + "ingresar";
alert (salida);

console.log (salida);



// Declaro Funcion para promediar los gastos por dia por semana. //
function promediosGastos (gasto1, gasto2, gasto3, gasto4, gasto5, gasto6, gasto7) {
    let resultadoSuma = gasto1 +gasto2 + gasto3 + gasto4 + gasto5 + gasto6 + gasto7;
    let promedio = resultadoSuma / 7;
    return promedio;
}

let gasto1 = parseInt (prompt("Ingrese gasto dia Lunes"));
let gasto2 = parseInt (prompt("Ingrese gasto dia Martes"));
let gasto3 = parseInt (prompt("Ingrese gasto dia Miercoles"));
let gasto4 = parseInt (prompt("Ingrese gasto dia Jueves"));
let gasto5 = parseInt (prompt("Ingrese gasto dia Viernes"));
let gasto6 = parseInt (prompt("Ingrese gasto dia Sabado"));
let gasto7 = parseInt (prompt("Ingrese gasto dia Domingo"));
let respuesta = promediosGastos (gasto1, gasto2, gasto3, gasto4, gasto5, gasto6, gasto7);
alert ("Tu promedio de gasto semanal por dia son $" + " "+ respuesta);