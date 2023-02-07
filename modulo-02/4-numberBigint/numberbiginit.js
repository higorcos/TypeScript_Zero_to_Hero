"use strict";
//Exemplo : number
let num1 = 23.89;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
console.log("Number - Ponto Flutuante: ", num1.toFixed(2));
console.log("Number - Hexadecimal: ", num2);
console.log("Number - Octal...: ", num3);
console.log("Number - Binário: ", num4);
//exemplo : bigint
//Lembra de configurar o target igual ou superior a 2020 ou exnext
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
