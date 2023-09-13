// Ejercicio 1: Promesas Encadenadas
// Crea una función que realice las siguientes tareas:

// Inicia una promesa que se resuelva después de 2 segundos con un número aleatorio entre 1 y 100.
// Luego, toma ese número y crea una segunda promesa que se resuelva después de 3 segundos con el resultado de elevar ese número al cuadrado./
// Finalmente, toma el resultado de la segunda promesa y crea una tercera promesa que se resuelva después de 1 segundo con la raíz cuadrada del número resultante.

const fun1 = () => new Promise(resolve => setTimeout(resolve, 2000, Math.floor(Math.random() * 100 + 1)))
.then(num => new Promise(resolve => setTimeout(resolve, 3000, num ** 2)))
.then(num => new Promise(resolve => setTimeout(resolve, 1000, num ** (1/2))))

fun1().then(console.log).catch(console.log)