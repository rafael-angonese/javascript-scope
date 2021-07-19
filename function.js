// Function Scope

// 1. Cria um escopo para: const, let e var

{
    var teste = "hello"
}
console.log(teste) // hello

function desrespeito() {
    lala = "lala"
}
desrespeito()
console.log(lala) // lala

function createMessage() {
    var message = "hello"
}
createMessage()
console.log(message) // Reference Error
