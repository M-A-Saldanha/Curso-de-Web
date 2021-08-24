const nome = "Marc0";

console.log(nome.charAt(4));
console.log(nome.charAt(5));
console.log(nome.charCodeAt(3));
console.log(nome.indexOf("c"));

console.log(nome.substring(1));
console.log(nome.substring(0,3));
console.log('Salve '.concat(nome).concat('!'));
console.log('Salve '  + nome +'!');

console.log(nome.replace(0, 'o'));
console.log(nome.replace(/\d/, 'o'));
console.log(nome.replace(/\w/g, 'o'));
console.log('Ana,Mario,Jonas'.split(/,/))


