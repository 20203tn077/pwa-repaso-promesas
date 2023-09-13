// Ejercicio 2: Promesa de Múltiples Solicitudes
// Crea una función que realice las siguientes tareas:

// Recibe un array de URLs como argumento.
// Utiliza fetch y promesas para realizar una solicitud GET a cada URL en el array.
// Devuelve una promesa que se resuelva con un array de los resultados de todas las solicitudes.

const fun2 = urls => Promise.all(urls.map(url => fetch(url).then(r => r.text())))

fun2([
  'https://reqres.in/api/users/1',
  'https://reqres.in/api/users/2',
  'https://reqres.in/api/users/3',
  'https://reqres.in/api/users/4',
  'https://reqres.in/api/users/5'
]).then(console.log).catch(console.log)