var readline = require('readline-sync');

function somatorio(numero) {

    return numero === 1 ? 1 : numero + somatorio(numero - 1)
    
}

let numero = Number(readline.question('Digite um numero inteiro qualquer: ')); 
console.log(somatorio(numero))

