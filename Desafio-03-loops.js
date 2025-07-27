// Desafíos Loops:

// 01 - Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;

while ( contador <= 10){

    console.log (contador);
    contador += 1;

}

// 02 - Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador = 10;

while ( contador >=0 ){
    console.log(contador);
    contador -= 1;

}

// 03 - Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let userNumber = prompt("Ingrese un número para la cuenta regresiva: ");


console.log("El número seleccionado por el usuario es: " + userNumber);

while ( userNumber >= 0 ){
    console.log ("Cuenta regresiva: " + userNumber);
    userNumber -= 1;
}

// 04 - Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let userNumber = prompt ( "Ingrese un número para la cuenta progresiva: ");

contador = 0;

while ( contador <= userNumber){
    console.log ( "Cuenta progresiva: " + contador);
    contador +=1;
}