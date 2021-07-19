// Inner scope

// 1. Um escopo dentro de outro ex.:
// Função dentro de função ou if dentro de função...
const message = "minha mensagem";

function createMessage() {
  const message = "message";
  if (true) {
    console.log(message); // message
  }
}

createMessage();
console.log(message); // minha mensagem
