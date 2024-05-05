/*----------******------------*/

//Primera consigna

/*Crea un script en JS que le solicite al usuario 
ingresar uno o más datos. Luego, con JavaScript, realiza 
operaciones matemáticas o de concatenación sobre las 
entradas teniendo en cuenta el tipo de dato. Al finalizar 
mostrar el resultados con alert() o console.log() */

// var nombre = prompt("Ingrese su nombre")
// var numeroTelefonico = prompt("ingrese su numero de Telefono")
// alert("Te damos la bienvenida a nuestra pagina " + nombre + ", " + "numero telefonico " + numeroTelefonico)




/*----------******------------*/

//Segunda consigna

/*Crea un algoritmo que solicite al usuario uno o más valores 
ingresados por prompt(), compare las entradas y, en función de ciertas 
condiciones, muestre por consola o alert() el resultado según los valores 
ingresados y las condiciones cumplidas <>*/

// var numero = prompt("Ingrese un numero")

// if(numero >= 10 && numero <= 50) {
//     alert("el numero esta entre 10 y 50")
// } else {
//     alert("el numero no esta entre 10 y 50")
// }




/*----------******------------*/

//Tercera consigna

/*Crea un array de strings con 5 elementos que quieras. Luego, 
mostrá en consola:
1. El array
2. Cuántos elementos tiene el array
3. El índice 0 del array
 */

// let animales = ["perro", "gato", "leon", "lobo", "oso"]

// console.log(animales)

// console.log(animales.length)

// console.log(animales[0])




/*----------******------------*/

//Cuarta consigna 

/*1. Crear una lista de artículos para el supermercado de mínimo 5
items.
3. Con el método prompt() pedile al usuario que ingrese un artículo
para agregar a la lista.
5. Si el artículo ya está en la lista (método: array.includes()) avisarle al
usuario que el artículo ya está.
7. Si no, agregar el artículo a la lista y mostrarle al usuario la lista de
todo lo que tiene que comprar */

// let articulos = ["leche", "harina", "huevos", "pan", "mantequilla"]

// let articuloIndicado = prompt("ingrese un producto para la lista de compras").toLowerCase();

// if (articulos.includes(articuloIndicado)) {
//     alert("el producto ya estaba en la lista y no se agregara")
//     document.writeln(articulos);
// } else {
//     articulos.push(articuloIndicado);
//     document.writeln(articulos);
// }


/*----------******------------*/

//Quinta consigna 

/*  El método new Date().getDay() nos devuelve un número que nos
indica qué día es (domingo = 0).
2. Hacé un switch que nos devuelva el nombre del día según el
número.
3. Mostrá en consola o en el documento qué día es hoy.*/

// let dia = new Date().getDay();
// switch (dia){
//     case 0:
//         console.log("hoy es Domingo");
//         break;
//     case 1:
//         console.log("hoy es Lunes");
//         break;
//     case 2:
//         console.log("hoy es Martes");
//         break;
//     case 3:
//         console.log("hoy es Miercoles");
//         break;
//     case 4:
//         console.log("hoy es Jueves");
//         break;
//     case 5:
//         console.log("hoy es Viernes");
//         break;
//     case 6:
//         console.log("hoy es Sabado");
//         break;
// }


/*----------******------------*/

//Sexta consigna 

/*Consigna
Usando el método prompt pedile al usuario que ingrese un
número.
Definí 3 caminos:
Si el número es mayor a 10.
Si el número es menor o igual a 10.
Si no es un número.
En cada camino, usá el método document.write para dejar un
mensaje según la elección. */

// Solicitar al usuario que ingrese un número
// const inputNumero = prompt("Por favor, ingresa un número:");

// // Convertir el valor ingresado a un número
// const numero = parseFloat(inputNumero);

// // Verificar si el valor ingresado es un número válido
// if (!isNaN(numero)) {
//   // El valor ingresado es un número
//   if (numero > 10) {
//     document.write("El número ingresado es mayor que 10.");
//   } else {
//     document.write("El número ingresado es menor o igual a 10.");
//   }
// } else {
//   // El valor ingresado no es un número válido
//   document.write("Lo que ingresaste no es un número válido.");
// }

/*----------******------------*/

//Septima consigna 

/*Mariana nos dice que para ella un número es de la suerte si
cumple con las siguientes tres condiciones:
★ ese número es positivo
★ ese número es múltiplo de 2 o de 3
★ ese número no es el 15
Escribí la función esNumeroDeLaSuerte() la cual recibiendo un
número, le diga a Mariana si es un número de la suerte (el número
debe cumplir con las tres condiciones antes mencionadas). */



// function esNumeroDeLaSuerte(num){
//     var num = parseInt(prompt("Ingrese un numero"));
//     if(num !== 15 && num > 0 && (num%2 === 0 || num%3 === 0)) {
//         document.write("Con suerte")
//     } else {
//         document.write("Sin suerte")
//     }
// }

// esNumeroDeLaSuerte();

/*----------******------------*/

//Octava consigna 

/*Para llegar a destino tenemos que caminar 100 pasos.
Usando el bucle while y el método document.write() mostrá por línea cuántos
pasos quedan por caminar, partiendo del paso 100 hasta llegar al paso 1.
 */
// let i = 100;
// do {
//     document.write(`<p>${"Faltan " + i + " pasos por caminar"}</p>`)
//     i--;
// } while (i >= 1)

/*----------******------------*/

//Novena consigna

/*Crear una función que tome un array de arrays de dos
números y me devuelva la suma total de la multiplicación
de los dos números.

Nota: usando el operador de asignación de adición(+=)
podemos re-asignar el valor de una variable sumando el
valor anterior */

/*----------******------------*/

//consigna 10

// 1. Recorrer un array de números con el método .map() y crear un
// nuevo array que indique el número y si el número es par o
// impar.

// 2. Crea un array de strings con nombres y luego guarda en una
// variable nombresCortos un nuevo array con los nombres que
// tengan 5 0 menos letras



/*----------******------------*/

//consigna 10

// Crear una función que reciba el parámetros nombre, apellido y 
// serie favorita y que devuelva un saludo:

function saludar(nombre, apellido, serieFavorita) {
  console.log("Hola " + nombre + " " + apellido + ", tu serie favorita es: " + serieFavorita)   
};

saludar("ricardo", "coello", "naruto");