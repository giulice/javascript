/*********************************** 3- Arrays ****************************************/

/* A- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4] + " " + meses[10]);

/* B- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

meses = meses.sort();
console.log(meses);

/* C- Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

meses.unshift("Primero");
meses.push("Ultimo");

/* D- Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

meses.shift();
meses.pop();

/* E- Invertir el orden del array (utilizar reverse)*/

meses.reverse();

/* F- Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

console.log(meses.join("-"));

/* G- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses = meses.slice(4,11);