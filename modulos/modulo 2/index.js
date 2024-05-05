

//---------*********------------//



/*Clase 1: Variables.

var number = 29;
let number2 = "hola";
const number3 = 4502123

console.log(number);
console.log(number2);
console.log(number3);*/







//---------*********------------//







/*Clase 2: Tipos.

let nombre = "Marcelo Eduardo"; //string
let edad = 20; //number
let vive = true//bolean
let indefinida;
let nula = null;
console.log(typeof nula) //typeof = dice el tipo de primitivo

let number1 = 200;
let number2 = 1;

let resultado = number1 + number2;

console.log(resultado);

//primitivos: 7
//string, number bigint, boolean, undefined, null, simbol. todo lo demas es un objeto

let dato1 = 20;
let dato2 = 10
let dato3 = "Firulais";

const resultado = dato1 + dato2 + dato3;
console.log(resultado);

let dato = "manzana"
console.log(dato);
dato = 100;
console.log(dato)
dato = true;
console.log(dato)*/





//---------*********------------//








/*Clase 3: Prompt, Console, Alert, ParseInt 

const nombre = prompt("ingrese su nombre");

alert("hola " + nombre);

document.writeln("hola " + nombre);
//writeLn = da un espacio al finalizar el contenido
const number1 = parseInt(prompt("primer numero"));

const number2 = parseInt(prompt("segundo numero"));

//parseInt = convierte a numero entero
//parseFloat = convierte a numero decimal

const resultado = number1 + number2;

document.write(" el resultado es " + resultado); */





//---------*********------------//








/*Clase 4: Condiciones con if, else 

const edad = parseInt(prompt("ingrese su edad"));

if (edad < 18) {
    document.write("La persona es menor de edad")
} else {
    document.write("La persona es mayor de edad")
} 

const edad = 18;

if (edad < 18) {
    document.write("Edad es menor que 18")
} else if (edad > 18) {
    document.write("Edad es mayor que 18")
} else {
    document.write("Edad es igual que 18")
} */







//---------*********------------//








/*Clase 5: Condicionales con switch */
/*
const hoy = new Date();//muestra la fecha actual
console.log(hoy.getDay());//muestra el dia en forma de numero, domingo = 0, sabado = 6

switch (hoy.getDay()) {
    case 0:
        document.write("Hoy es Domingo");
        break;
    case 1:
        document.write("Hoy es Lunes");
        break;
    case 2:
        document.write("Hoy es Martes");    
        break;
    case 3:
        document.write("Hoy es Miercoles");
        break;
    case 4:
        document.write("Hoy es Jueves");
        break;
    case 5:
        document.write("Hoy es Viernes");
        break;
    case 6:
        document.write("Hoy es Sabado"); 
        break;      
    default:
        document.write("No es un dia de la semana");
        break;
}*/









//---------*********------------//






/*Clase 6: Estructuras de datos: Arrays */
/*
const frutas = ["manzana", "pera", "kiwi", ];
document.write(frutas[1]);
console.log(frutas[2]);

//zero based index
//length: sirve para saber la posicion de un dato en un array, ej: manzana.length. o para saber cuantos datos tiene el array, frutas.length

const dato = "mango";
frutas.push("tomate");
frutas.push(dato);
console.log(frutas);

console.log(frutas[frutas.length - 1]);

frutas.pop();//.pop: quita el ultimo valor del array, frutas.pop(3) saca el 3 valor del array
frutas.unshift(dato);//unshift: pone un valor al principio del array

frutas.shift();//shift: quita el primer valor del array*/








//---------*********------------//








/*Clase 7: Ejercicio lista de Compras*/

//lista de compras:
//definir un arreglo "listaDeCompras" con algunos productos
//pedir al usuario por pantalla que ingrese un producto.
//si el producto no esta en la lista agregarlo y mostrar por pantalla la lista actualizada
//si el producto ya estaba en la lista, indicarlo por pantalla y no agregarlo,
//¿Que pasa con la diferencia entre mayusculas y minisculas?
/*
const listaDeCompras = [
    "leche ",
    "huevos ",
    "atun ",
    "avena ",
    "cafe ",
]

const producto = prompt("ingrese un producto para la lista de compras").toLowerCase();//.toLowerCase(): convierte todos los caracteres ingresados en el prompt en minusculas

if (listaDeCompras.includes(producto)) {
    alert("el producto ya estaba en la lista y no se agregara")
} else {
    listaDeCompras.push(producto);
    alert(listaDeCompras);
}*/





//---------*********------------//






//Clase 8: Operadores de comparacion.

/*const a = 8;
const b = 9;
document.writeln(a === b); (mostrara falase porque no son iguales)*/ 

//===: igualdad estricta
//mayor > menor
//menor < mayor
//>=: mayor o igual, <=: ,menor o igual
//!=: desigual, !==: desigual estricto
//&&: significa "and"
//||: significa "or"
//!: invierte el valor booleano
/*
const a = 9; 
const b = 9; 
const animal = "caballo";
const tiendaMascota = false;
document.writeln(!tiendaMascota );
*/



//---------*********------------//






/*Clase 9: funciones y scope (ambito)*/
/*
function saludar(name = "sin nombre") {
   return "hola" + name
}

const despedir = (name) => {
    return "chao" + name
}

const intro = saludar("mario");
const outro = despedir("Maria")
console.log(intro, outro)*/
/*
function interior() {
    let a = 10 //tiene prioridad la variable que esta dentro de su funcion
    let b = 20
    console.log(a + b)
}

interior(a)*/




//---------*********------------//




//Clase 10: Ejercicio: numero de la suerte
/*
function esNumeroDeLaSuerte(num) {
    if(num > 0 && num !== 15 && (num%2 === 0 || num%3 === 0)) {
        return true
    }
    return false
}

// if(esNumeroDeLaSuerte(0)) {
//     document.write("Suerte") 
// } else {
//     document.write("Sin suerte")
// }

//ternario = alternativa a if
esNumeroDeLaSuerte(8) ? document.write("Suerte") : document.write("Sin suerte") */







//---------*********------------//




//Clase 11: Bucle for

// nota: si pones ++ se le agrega 1 a la variable osea 1++ es igual a ej = ej + 1, pasa lo mismo con menos osea ej = ej - 1 


// for(let i = 0; i < 10; i++) {
//     console.log(`esta es la iteracion numero: ${i+1}`)
// }

// const topSongs = ["Master of puppets", "Karma police", "Money for Nothing", "help", "What's love got to do with it"]


// for(let i = 0; i < 5; i++){
//     document.writeln(topSongs[i])
// }







//---------*********------------//





//Clase 12: Bucle con metodo forEach

// const topSongs = ["Master of puppets", "Karma police", "Money for Nothing", "help", "What's love got to do with it"]

// //`` (comillas invertidas): pueden manejar strings y variables

// //funcion con flecha = (nombre de funcion) => {}


// topSongs.forEach((song) => {
//     // document.writeln(`<p>${song}</p>`)        manera actual
        // document.writeln("<p>" + song + "</p>")  manera vieja
// })







//---------*********------------//






//Clase 13: metodo de los arrays


// const topSongs = ["Master of puppets", "Karma police", "Money for Nothing", "help!", "What's love got to do with it", "dancing in the dark", "total eclipse of the heart", "seven Wonders", "Never tear us apart", "hard woman"]



// topSongs.forEach((song) => {
//     document.writeln(`<p>${song}</p>`)  
// })
    


// // array methods
// //includes, find, findIndex, sort, reserve, concat, join, some


// const nums = [1, 10 , 310, 32, 12, 45, 25, -2, 90, 434,];

// const edades = [10, 15, 40, 3, 9, 20]

// const names = ["Cecilia", "Adriana", "Miguel"]

// // modificaciones no destructivas
//     //map

//     // (n) => n * 2 = se llama callback

//     const nuevoNums = nums.map((n) => n * 2) // retorna el arreglo que escogamos sin modificar el elegido. en este caso nuevoNums es la copia de nums y lo que esta dentro del parentesis es la funcion que se hara, n = item del arreglo. n * 2 = multiplica n(item del arreglo) por 2

//     //filter
//     const filteredNums = nums.filter((n) => n > 30)//retorna los numeros que pasen la condicion establecida en el callback
//     console.log(filteredNums);
// //


// //join

// console.log(names.join(" ")) // transforma todo el arreglo en texto. arreglo.join() adentro del parentesis puedes establecer como se separara el texto


// //some

// console.log(edades.some((el) => el > 18)) // muestra true o false si se cumple la funcion en alguna parte del arreglo, en este caso: el > 18. analiza el arreglo hasta conseguir un item que cumpla con el parametro establecido en la funcion, despues de conseguirlo deja de analizar el arreglo y muestra true, si no consiguio muestra false

// //concat

// const combinedArrays = topSongs.concat(names) //"arreglo1".concat("arreglo2") asi se combinan arreglos
// console.log(combinedArrays)

// //includes


// console.log(topSongs.includes("help!")) // includes muestra true si esta ese valor en el arreglo o false si no esta


// //find

// console.log(topSongs.find((song) => song === "Karma police")) // find busca el item, y si lo encuentra lo muestra, y si no muestra undefined 

// //findIndex

// console.log(topSongs.findIndex((song) => song === "hard woman")) // muestra en que posicion se enceuntra el item que busquemos y si no encuentra muestra -1

// //sort

// topSongs.sort() // ordena el arreglo alfabeticamente
// topSongs.sort().reverse() // ordena y despues lo pone en reversa
// console.log(topSongs)

// console.log(nums.sort((a, b) => a - b)) // para ordenar los numeros de mayor a menor se pone (a, b) => a - b) como metodo de comparacion y ordenamiento 

// console.log(nums.sort((a, b) => a - b).reverse()) // muestra los numeros de mayor a menor 

// console.log(nums.sort((a, b) => b - a)) //hace lo mismo que la propiedad reverse cambiando solo b por a







//---------*********------------//





//Clase 14: Objetos literales

// const persona1 = {
//     nombre: "Sebas",
//     apellido: "Coello",
//     edad: 10,
//     habilidades: ["Matematicas", "Jugar roblox", "Dibujar"]
// }

// const persona2 = {
//     nombre: "Carolina",
//     apellido: "Quevedo",
//     edad: 42,
//     habilidades: ["Hacer tortas", "Comunity Manager", "Administracion de Empresas"]
// }

// const familia = [persona1, persona2]
// console.log(familia)

// console.table(persona1) // muestra el contenido en una tabla

// console.log(persona1.apellido) // para mostrar lo que quieres utilizas . y el nombre del elemento al que quieres acceder. ej: persona.apellido

// console.log(persona1.habilidades[1]) // si es un arreglo, para acceder a un elemento en especifico elegir la posicion del arreglo en medio de los [] 

// persona1.origen = "Venezuela" // asi se añade un nuevo elemento al objeto

// persona1.nombre = "Andres" // asi cambias el valor de un elemento

// persona1.habilidades.push("Colorear")

// console.log(persona1.habilidades)

// familia.forEach((persona) => console.log(persona.nombre, persona.apellido))





//---------*********------------//




//Clase 15: metodos nativos: setTimeout() y setInterval()

//el metodo setTimeout() establece un temporizador que ejecuta una funcion o una porcion de codigo despues de que transcurre un tiempo establecido

// const timer = setTimeout(() => {
//     console.log("Mundo")
// }, 2000) //muestra lo que se especifica dentro del codigo en esta fraccion de tiempo, es decir muestra en la consola "mundo" despues pasado los 2000 milisegundos

// console.log("Hola")
// clearTimeout(timer) // limpia el timeout funciona igual con un clearInterval pero lo mas apropiado es nombrarlo con su propiedad

//setInterval() ejecuta una funcion o un fragmento de codigo de forma repetitiva cada vez que termina el periodo de tiempo determinado

// let contador = 0

// const intervalo = setInterval(() => {
//     console.log("valor de contador es", contador)
//     contador++
//     if (contador === 5) {
//         clearInterval(intervalo)
//     } 
// }, 1000) // muestra en la consola lo establecido y repitiendolo durante el tiempo especificado, es decir muestra "valor de contador es" en consola  cada 1000 milisegundos, sigue infinitamente




       




//---------*********------------//

// pppppppp     RRRRRRRR         OOOOOOOO       GGGGGGG       RRRRRRRRR               A           MM       MM
// p     pp     R      RR       O        O     G       G      R        RR            A A          M M     M M
// p     pp     R      RR       O        O     G        G     R        RR           A   A         M  M   M  M
// pppppp       RRRRRRR         O        O     G              RRRRRRRRR            A     A        M   M M   M
// p            R      R        O        O     G   GGGGGGG    R        R          AAAAAAAAA       M    M    M   
// p            R       R       O        O     G         G    R         R        A         A      M         M
// p            R        R      O        O     G         G    R          R      A           A     M         M   
// p            R         R      OOOOOOOO       GGGGGGGGGG    R           R    A             A    M         M    

//Clase 16: Manipulacion de DOM A y B


// const para = document.querySelector("p") //busca y selecciona la primera etiqueta que especifiquemos en el parentesis

// para.innerText = "este texto ha sido modificado" // modifica el texto

// para.textContent = "texto modificado por segunda vez" // hace lo mismo que innerText

// para.classList.add("para") //añade una clase

// const paras = document.querySelectorAll("p") // devuelve todos los elementos de una etiqueta en un arreglo

// const body = document.querySelector("body")

// const lista = document.querySelector("ul")

// paras[0].textContent = "texto modificado"
// paras[0].classList.add("para")
// paras[1].classList.remove("para") //.remove = quita clase

// const nuevoTitle = document.createElement("h3")
// nuevoTitle.innerText = "Titulo dinamico con Js"
// console.log(nuevoTitle)

// body.appendChild(nuevoTitle) //crea un nodo hijo 

// for (let i = 0; i < 5; i++) {
//     const li = document.createElement("li")
//     li.innerText = `Elemento ${i + 1}`
//     lista.appendChild(li)
// }


// for (let i = 0; i < 5; i++) {
//     const li = document.querySelector("li")
//      li.remove   
// }

// const input = document.getElementById("texto") //seleciona la id que este dentro del parentesis

// const btn = document.querySelector("button")

// const para = document.getElementById("muestra-texto")

// btn.addEventListener("click", showText)

// function showText() {
//     para.innerText = input.value
// }










//---------*********------------//





//Clase 17: Formato JSON


// let json = `{"empleados":
// [{ "nombre": "Carlos", "apellido": "Perez" },
// { "nombre": "Julieta", "apellido": "Calcaterra" },
// { "nombre": "Maribel", "apellido": "Roldan" }]}` //formato json

// console.log(json)

// const data = JSON.parse(json) // convierte json a objeto js

// console.log(data)

// data.empleados.push({ nombre: "Carolina", apellido: "Quevedo"}) // asi se añade objetos a un archive formato json

// console.log(data.empleados)

// json = JSON.stringify(data) //convierte objeto Js a JSON

// console.log(json)





//---------*********------------//






//Clase 18: Promesas.


// let json = `{"empleados":
// [{ "nombre": "Carlos", "apellido": "Perez" },
// { "nombre": "Julieta", "apellido": "Calcaterra" },
// { "nombre": "Maribel", "apellido": "Roldan" }]}`

// function getData(recurso) {
//     let data;
//     const error = false;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (error) {
//                 reject("Ups!") //lo que esta dentro del parentesis
//             } else {
//                 data = JSON.parse(recurso)
//                 resolve(data)
//             }
//         }, 3000)
//     }) //hace una "promesa", mira en todos los archivos hasta encontrar el que necesita y si no encuentra te dice undefined
// }

// getData(json)
// .then((data) => console.log(data) )
// .catch((error) => console.log(error))





//---------*********------------//


//Clase 19: Fetch de datos JSON desde una API
const section = document.querySelector("section");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => renderUsers(data))
    .catch(err => console.log(err));

    function renderUsers(users) {
        users.forEach(user => {
            const card = document.createElement("div");
            card.innerHTML = `
            <p>Nombre: ${user.name}</p>
            <p>Usernname: ${user.username}</p>
            <p>Email: ${user.email}</p>
            `
            section.appendChild(card)
        });
    }