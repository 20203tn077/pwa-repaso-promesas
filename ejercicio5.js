// Ejercicio 5: Promesa con Cancelación
// Crea una función que realice las siguientes tareas:

// Inicia una promesa que se resuelva después de 5 segundos con un mensaje.
// Si se llama a una función cancel antes de que se cumplan los 5 segundos,
// la promesa debe rechazarse con el mensaje "Promesa cancelada".

let cancel

const fun5 = message => new Promise((resolve, reject) => {
  cancel = () => reject('Promesa cancelada')
  setTimeout(resolve, 5000, message)
})

fun5('UwU').then(console.log).catch(console.log)
setTimeout(cancel, 4000)