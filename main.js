let result

// console.log(result)

function waitUntil(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result = message
            // resolve()
            reject(message)
        }, 2000)
    })
}

// waitUntil('fierro alv').then(() => console.log(result)).catch(console.log)

// console.log(result)

function multiplicar(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num1 * num2), 1500)
    })
}

function dividir(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(reject(num1 / num2), 2000)
    })
}

// Promise.all([multiplicar(1, 2), dividir(1, 2)])

function multiplicarLento(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(num1 * num2), 2000)
    })
}

function dividirRapido(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num1 / num2), 1000)
    })
}

// Promise.race([multiplicarLento(1, 2), dividirRapido(1, 2)]).then(console.log).catch(e => console.log('ERROR ', e))

