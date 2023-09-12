// Ejercicio 1: Promesas Encadenadas
// Crea una función que realice las siguientes tareas:

function fun() {
    // Inicia una promesa que se resuelva después de 2 segundos con un número aleatorio entre 1 y 100
    const random = new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 100 + 1)), 2000))

    random.then(num => {

    })
}

random => () => 

// Luego, toma ese número y crea una segunda promesa que se resuelva después de 3 segundos con el resultado de elevar ese número al cuadrado.

cuadrado => () => new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 100 + 1)), 3000))

// Finalmente, toma el resultado de la segunda promesa y crea una tercera promesa que se resuelva después de 1 segundo con la raíz cuadrada del número resultante.

raiz => () => new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 100 + 1)), 2000))