let valor //não inicializada
console.log(valor)
// console.log(valor2) //valor 2 nem foi definido

valor = null //ausência de valor, o valor NULO foi definido para a variável, porém não há valores.
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //produto sem preço
console.log(!!produto.preco)
console.log(produto)