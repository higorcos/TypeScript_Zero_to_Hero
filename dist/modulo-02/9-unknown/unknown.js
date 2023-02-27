"use strict";
{
}
console.log('\n ==> Exemplo 01 - Unknown\n');
let value;
value = true;
value = 123;
value = [1, 2, 3];
value = 'Aqui';
value = { 'id': 1, 'name': 'higor' };
{
}
console.log('\n ==> Exemplo 03 - Diferença entre: "any" vs "unknown"\n');
let algumaCoisaAny;
let algumaCoisaUnknown;
console.log(algumaCoisaAny.toFixed(2));
if (typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed(2));
}
else {
    console.log('não é');
}
