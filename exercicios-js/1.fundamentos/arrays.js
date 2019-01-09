const valores = [7.7, 8.9, 6.3, 9.2] // [ ] define os arrays, separando sempre por " , "
console.log(valores[0], valores[3])  
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[10] = 10
console.log(valores)

console.log(valores.length) //length - mostra a quantidade de arrays

valores.push({id:3}, false, null, 'teste') //push - adiciona mais valores dentro de um array, mas não é uma boa prática
console.log(valores)

console.log(valores.pop())  //pop - retira o último valor do array, então ele realmente tira do array

delete valores[0] //delete - assim como o pop, ele retira um valor de um array
console.log(valores) 

console.log(typeof valores) //array - em JavaScript um array sempre sempre OBJECT