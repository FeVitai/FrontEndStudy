const prod1 = {} //par de chaves é para objeto {}, como os [] é para array
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
prod2['Desconto Legal'] = 0.40 //evitar atributos com espaço
console.log(prod2)













//Em JS objeto é uma coleção de chaves e valores, ter o nome e passar um valor para ele, pode ser texto, número, booleano, string, função. Um objeto pode ter um outro objeto dentro dele
//Pode ter o objeto "Produto" e dentro do Produto pode ter um objeto chamado "Categoria" e dentro de categoria ter um ID da categoria 
//Objeto também é um grupo de pares "Chave e Valor"