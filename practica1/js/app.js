console.log('imprimiendo desde 1 archivo')
let numero = 5.0;
let edad = 22;
let nombre = "lautaro";
let mayorDeEdad = true;
let resultado = null;
let variableNodefinida;
let claveUnica = Symbol("clave");
let numerogrande = 398248892854713649961412641612;
let persona = {nombre: "jorge", edad: 30};

///Arrays
let array = [1,2,3,4,5]

///Funciones
function saludar(nombre)
{
    console.log("Hola, " + nombre + "!");
}

///Colecciones, map n set
let mapa = new Map();
mapa.set("clave","valor");

let conjunto = new Set();
conjunto.add("elemento");

let nombre2 = "lautarOOO";
let cantPalaras = nombre2.length;
let letraNombre = nombre2.indexOf(5);
///concat
///slice
///substring substring a partir de determinado indice
///repeat texto
///split divide una string en 2 espacios
let cadena = 'cadena';
let url = `El numero es: ${cadena} ${cadena}`
console.log(url);
let cadenaTest = "Estamos aprendiendo JavaScript en la UTN";
console.log(cadena.split(" "));
const persona1 = {
    nombre: 'lautaro',
    edad: 15,
}
persona1.imagen = "img/fondo.jpg";  ///Agrego atributo
delete producto.imagen; ///Borro atributo
const {nombre3} = persona1;



