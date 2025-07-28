// Desafíos finales:

// 01 - Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log("Bienvenido a la app");

// 02 - Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

const nombre = "Silvana";

console.log ( "Hola, " + nombre + "! en la consola del navegador.");

//  03 - Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

// Uso la variable declarada en ej anterior

alert("Hola, " + nombre);

// 04 - Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let resp = prompt("Cuál es el lenguaje de programación que más te gusta?: ");

console.log("La respuesta es: " + resp);

// 05 - Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
//  Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
// Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 8;
let valor2 = 1;
let resultado = valor1 + valor2 //suma de los valores 

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}. `);


// 06 - Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
// Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
// Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

valor1 = 8;
valor2 = 1;
resultado = valor1 - valor2 // resultado de la diferencia entre valores

console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}. `);

// 07 - Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad > 17) {
    console.log('Eres mayor de edad.');
} else {
    console.log('Eres menor de edad.');
}

// 08 - Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = parseInt(prompt( "Ingrese un número, por favor: "));

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}


// 09 - Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let contador = 1;

while ( contador <= 10){
    console.log(contador);
    contador++
};

// 10 - Crea una variable "nota" y asígnale un valor numérico. 
// Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 8;

let mensaje =  (nota >= 7 ) ? "Aprobado" : "Reprobado";

console.log(mensaje);

// 11 - Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroAleatorio =Math.random();

console.log(numeroAleatorio);


// 12 - Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numeroAleatorio2 = Math.floor(Math.random()* 10 ) + 1 ;
console.log(numeroAleatorio2);

// 13 - Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numeroAleatorio3 = Math.floor(Math.random ()* 1000 ) + 1;

console.log(numeroAleatorio3);
