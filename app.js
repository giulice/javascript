/*********************************** 1- Variables y Operadores ****************************************/

/* A- Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.*/

var a = 1;
var b = 2;
var c = a + b;

/* B- Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/

var a = "Giuliano";
var b = "Cetto";
var c = a + b;

/* C- Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado la suma una 3er variable (utilizar length).*/

var a = "Giuliano";
var b = "Cetto";
var c = a.length + b.length;

/*********************************** 2- Strings ****************************************/

/* A- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var a = "abcdefghij";
a = a.toUpperCase();

/* B- Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var a = "abcdefghij";
var b = a.substring(0,5);

/* C- Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var a = "abcdefghij";
var b = a.substring(7);

/* D- Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var a = "abcdEfGhiJ";
var b = a.substring(0,1).toUpperCase() + a.substring(1).toLowerCase();

/* E- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var a = "abcd efghij";
var b = a.indexOf(" ");

/* F- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula
y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var a = "giuliano cetto";
var p = a.indexOf(" ");                                                          //Space position
var b = a.substring(0,p);                                                        //first word
var c = a.substring(p);                                                          //second word
var b = b.substring(0,1).toUpperCase() + b.substring(1).toLowerCase();
var c = c.substring(0,2).toUpperCase() + c.substring(2).toLowerCase();
var d = b + c; 

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

/*********************************** 4- If Else ****************************************/

/* A- Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
y sino un alerta con el mensaje “Lower than 0,5”*/

if (Math.random() >= 0.5){
    alert("Greater than 0,5");
}
else{
    alert("Lower than 0,5");
}

/* B- Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años*/

var age = 50

if (age < 2){
    alert("Bebe");
}else if (age >= 2 && age <= 12){
    alert("Nino");
}else if(age >= 13 && age <= 19){
    alert("Adolecente");
}else if(age >= 20 && age <= 30){
    alert("Joven");
}else if(age >= 31 && age <= 60){
    alert("Adulto");
}else if(age >= 61 && age <= 75){
    alert("Adulto Mayor");
}else if(age >= 76 && age <= 100){
    alert("Anciano");
}else{
    alert("No contemplado");
}

/*********************************** 5- For ****************************************/

/* A- Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
para mostrar una alerta utilizando cada una de las palabras.*/

var palabras = ["uno", "dos", "tres", "cuatro", "cinco"];

for(var i=0;i<palabras.length;i++){
    alert(palabras[i]);
}

/* B- Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/

for(var i=0;i<palabras.length;i++){
    palabras[i] = palabras[i].substring(0,1).toUpperCase() + palabras[i].substring(1).toLowerCase();
    alert(palabras[i]);
}

/* C- Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for
para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

var palabras = ["uno", "dos", "tres", "cuatro", "cinco"];
var sentence = ""

for(var i=0;i<palabras.length;i++){
    sentence += palabras[i] + " ";
}
alert(sentence);




