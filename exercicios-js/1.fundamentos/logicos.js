function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //OR = ||  / | = comparar bit a bit
    const comprarTv50 = trabalho1 && trabalho2 //&& = operação do tipo E
//  const comprarTv32 = !!(trabalho1 ^trabalho2) //bitwise xor (exclusivo, que trabalha bit a bit)
    const comprarTv32 = trabalho1 != trabalho2 //!= diferente
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))