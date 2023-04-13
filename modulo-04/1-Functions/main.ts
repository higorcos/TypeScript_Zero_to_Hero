{/*

            
*/}
export {}
//==> Exemplo 01 
console.log(`\n\t==> Exemplo 01\n`);

function somarDoisNumeros(num1:number, num2:number):number{
    return num1 +num2
}

console.log(somarDoisNumeros(3,5))
//==> Exemplo 02 - função anônima
console.log(`\n\t==> Exemplo 02\n`);

const saudar = function (msg: string):string{
    return msg;
}
    console.log(saudar('OIIIII !!!'))


//==> Exemplo 03 - arrow function
console.log(`\n\t==> Exemplo 03\n`);
const saudarArrow = (msg: string):string =>{
    return msg;
}
    console.log(saudarArrow('OIIIII !!! ARROW'))

//==> Exemplo 04 - function constructor
console.log(`\n\t==> Exemplo 04\n`);

const saudarContructor = new Function('mensagem', 'return "MSG: " + mensagem');
    console.log(saudarContructor('AQUI contructor'));


 


   


