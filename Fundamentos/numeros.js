const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const ava1 = 9.871;
const ava2 = 6.871;

const total = ava1 * peso1 + ava2 * peso2;
const media = total/(peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2)); // converte para binario.
console.log(typeof media);
console.log(typeof Number);

// Algumas peculiaridade que podem ocorrer devido JavaScript ser de tipagem fraca.

// Ao invés de dar erro retorna um valor infinity.
console.log(7/0); 

// Ao invés de apresentar erro ele tenta indentifica algum numero e o multiplica.
// Pode ocorrer alguns erros de interpretação.
console.log("10" / 2); 

// Ao invés de duplicar a string ele retorna um erro.
console.log("show" * 2);

// Ao invés do resultado ser 0.8 ele retorna 0.7999999.
console.log(0.1 + 0.7);

// Chamar um literal diretamente dentro da função gera um erro.
// Porém,se colocado dentro de um pareteses ele funciona
//Exemplo:
//console.log(10.toString(2));
console.log((10).toString(2));
