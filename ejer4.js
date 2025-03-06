//ejercicio 4 
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filtrarPrimos(arr) {
    return arr.filter(esPrimo);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPrimos(numeros));