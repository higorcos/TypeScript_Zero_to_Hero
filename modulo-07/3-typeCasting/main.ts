{/*

       Type Casting

        conversão de tipo
        Palavra chave <> ou as

*/}
export {}
//==> Exemplo 01 
const nome:unknown = 'higor'
console.log((nome as string).toLocaleLowerCase()) 

const carro = 'Jetta';

const tamanhoString: number = (<string>carro).length;

console.log(tamanhoString)

   


   


