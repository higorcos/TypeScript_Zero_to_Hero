"use strict";
{
}
console.log('\n ==> Exemplo 01 -  Tipo Any  \n');
const a = 21;
const b = ['Higor'];
const result = a + b;
console.log(result);
console.log('\n ==> Exemplo 02 -  Tipo "any" inferido implicitamente \n');
let qualquercoisa, qualquercoisa02;
qualquercoisa = 'Aqui qualquer coisa';
qualquercoisa02 = 23;
console.log(qualquercoisa);
console.log(qualquercoisa02);
console.log('\n ==> Exemplo 03 -  Quando devemos usar Any \n');
const form = {
    nome: 'Higor',
    age: 21,
};
console.log('');
