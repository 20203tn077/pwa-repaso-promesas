// Ejercicio 3: Promesas Paralelas
// Crea una función que realice las siguientes tareas:

// Recibe un array de funciones que devuelven promesas como argumento.
// Ejecuta todas las funciones en paralelo y espera a que todas las promesas se resuelvan.
// Devuelve una promesa que se resuelva con un array de los resultados de todas las promesas.

const fun3 = funcs => Promise.all(funcs.map(func => func()))

fun3([
  () => new Promise(r => setTimeout(r, 1000, 'Promesa 1')),
  () => new Promise(r => setTimeout(r, 1500, 'Promesa 2')),
  () => new Promise(r => setTimeout(r, 2000, 'Promesa 3'))
]).then(console.log).catch(console.log)