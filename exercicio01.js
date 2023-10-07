function somar(valorA, valorB) {
    return valorA + valorB
}

function subtrair(valorA, valorB) {
    return valorA - valorB
}

function dividir(valorA, valorB) {
    return valorA / valorB
}

function multiplicar(valorA, valorB) {
    return valorA * valorB
}

function calcular(valorA, valorB, callback) {
    return callback(valorA, valorB)
}

console.log(calcular(45,9,dividir))