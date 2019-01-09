const escola = "Cod3r"

console.log(escola.charAt(4)) //charAt (numero)) - mostra a letra que esta no indice 4 dentro da string (começa por 0)
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //charCodeAt(numero)) - mostra o valor da letrana tabela unicode/asp
console.log(escola.indexOf('3')) // indexOf ('3')) - retorna o índice associado ao valor 3

console.log(escola.substring(1)) //substring (1)) -Imprime tudo da string 1 em diante
console.log(escola.substring(0, 3))

console.log('Escola ' + escola + "!")
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) //replace (3, 'e')) - Substituir a posição 3 pela letra "e"

console.log('Ana,Maria,Pedro'.split(',')) //split converte string em array, - .split(',')) / .split(/,/)) após cada virgula, será definido um array

