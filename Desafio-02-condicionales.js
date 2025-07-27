// Desafios de condicionales y concatenación

Desafíos:

// 1- Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".


let day = prompt("Inserte qué dia es hoy: ");

console.log(day);

if ((day == "sabado") || ("Sabado") || ("domingo") || ("Domingo")) {

    alert("¡Buen fin de semana!");
} else {
    
    alert("Buena semana!");
}

// 2 - Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let number = prompt ( "Ingrese un número: ");

console.log(number); //para verificar que se guarda bien la variable que ingreso el usuario

if ( number > 0 ){ 
    alert("Es un número positivo!");

} else if (number < 0){
    alert("Es un número negativo!");
} else {
    alert ("El número es cero!")
}

// 3 -Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

const score = prompt ("Ingrese su puntuación: ");
console.log(score); 

if ( score >= 100) {
    alert("Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.");
}


// 4- Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

const userAccount = 5000;

alert(`El saldo de tu cuenta bancaria es: ${userAccount}`); 

// 5-Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

const userName = prompt ("Ingrese su nombre: ");

alert(`Bienvenido! ${userName}`);