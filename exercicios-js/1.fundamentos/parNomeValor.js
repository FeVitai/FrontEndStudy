// par nome/valor
const saudacao = 'Opa' // Constexto léxico 1 - Local onde a variavel foi definida fisicamente no  código - lexico tem haver com palavra!

function exec () {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)