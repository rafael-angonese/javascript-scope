// Lexical Scope

// 1. Parecido com o inner, é o acesso que uma função interna
// tem de uma variável do escopo pai, mesmo essa função sendo chamada
// num escopo fora do escopo pai

const message = "global";

function createMessage() {
  const message = "Minha mensagem";

  function myMessage() {
    console.log(message);
  }

  return myMessage;
}

const msg = createMessage();
msg(); // Minha mensagem

// temos conceito de closure envolvido aqui
// possibilidade de usar uma variável fora do contexto
// snapshot da função mesmo após executar a função