// Global Scope
// 1. É o maior escopo de todos, o que abrange todos
const pai = "variavel global";
{
  console.log(pai);
}

// 2. Variável com var no Browser e o objeto window?

// criar uma varíavel no browser com o var, 
// ira criar uma varíavel atribuida ao objeto window
var hello = "alo"
window.hello // alo

// criar uma varíavel com const ou let no browser
// não ira atribuir a varíavel ao objeto window
const hi = "oi"
window.hi // undefined

// 3. Varíavel com var no Node e o objecto global?

// global do Node se chama global
var message = "hello"
console.log(global.message) // undefined

// 4. Varíavel sem nenhuma palavra chave no Node em relação ao objeto global?
sujou = "hello"
console.log(global.sujou) // hello