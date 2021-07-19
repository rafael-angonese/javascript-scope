// Definir uma váriavel e usar ela na próxima linha
const message = "minha mensagem";
console.log(message);

// Definir uma váriavel dentro de um if e usar ela fora do if
// if (true) {
//   const if_message = "mensagem dentro de um if";
// }
// console.log(if_message); // Reference Error

// Escopo = visibilidade de variáveis



// Conclusão

// Se precisamos cuidar da visibilidade das nossas variáveis, precisamos entender um pouco mais de Escopo
// Um escopo é o mesmo que dizer quais são os limites de uso das nossas variáveis
// Um escopo pode ser um bloco de código, função ou módulos
// Podemos colocar um escopo dentro do outro
// Temos liberdade para usar os mesmos nomes de variáveis, desde que os escopos estejam bem definidos
// Uma função poderá ser executada em qualquer lugar e terá acesso ao escopo pai