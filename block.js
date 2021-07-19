// Block Scope

// 1. Cria um escopo local
{
  const boosting = "Boosting People";
  console.log(boosting);
}
// console.log(boosting) // Reference Error

// 2. Pode ser if, for, while

for (let char of ["a", "b", "c"]) {
  const message = char;
  console.log(message);
}
// console.log(message) // Reference Error

// 3, O que acontece se eu mudar de const, let para var?

for (let char of ["a", "b", "c"]) {
  let message = char;
  console.log(message);
}
// const e let vai respeitar o escopo de bloco
// var não respeitar o bloco de escopo local
console.log(message); // Vai imprimir o c
