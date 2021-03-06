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