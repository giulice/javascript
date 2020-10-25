/*********************************** 1- Variables y Operadores ****************************************/

/* A- Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.*/

var a = 1
var b = 2
var c = a + b

/* B- Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/

var a = "Giuliano"
var b = "Cetto"
var c = a + b

/* C- Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado la suma una 3er variable (utilizar length).*/

var a = "Giuliano"
var b = "Cetto"
var c = a.length + b.length

/*********************************** 2- Strings ****************************************/

/* A- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var a = "abcdefghij"
a = a.toUpperCase()

/* B- Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var a = "abcdefghij"
var b = a.substring(0,5)

/* C- Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var a = "abcdefghij"
var b = a.substring(7)

/* D- Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var a = "abcdEfGhiJ"
var b = a.substring(0,1).toUpperCase() + a.substring(1).toLowerCase()

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var a = "abcd efghij"
var b = a.indexOf(" ")






