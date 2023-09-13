// Ejercicio 4: Promesas en Cadena con Retraso
// Crea una función que realice las siguientes tareas:

// Recibe un número n como argumento.
// Utiliza un bucle para crear una cadena de promesas, donde cada promesa se resuelve después de N segundos con el número actual en el bucle.
// Cada promesa debe imprimir el número en la consola antes de resolverse.
// Finalmente, devuelve una promesa que se resuelva después de N segundos con el mensaje "Todas las promesas se resolvieron".

const fun4 = n => {
  let lastProm
  const prom = i => new Promise(resolve => setTimeout(() => {
    console.log(i)
    resolve(i)
  }, n * 1000))
  for (let i = 1; i <= n; i++) lastProm = lastProm ? lastProm.then(() => prom(i)) : prom(i)
  return lastProm.then(() => new Promise(resolve => setTimeout(resolve, n * 1000, 'Todas las promesas se resolvieron')))
}

fun4(5).then(console.log).catch(console.log)