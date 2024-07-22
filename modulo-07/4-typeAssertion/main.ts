{/*

       Type Assertion

       conversão de tipo
        Palavra chave <> ou as

        semelhate ou typeCasting

        Apenas em tempo de compilação

*/}
export {}
//==> Exemplo 01 - Type Assertion
console.log(`\n\t==> Exemplo 01\n`);


const exibirPreco = (preco:number, desconto: number,formato:boolean ): number|string =>{
const precoDesconto = preco *(1-desconto);


return formato ? `R$ ${precoDesconto}` : precoDesconto;
}
const descontoFinalS = exibirPreco(100,0.05,true) as string;
// const descontoFinalS = exibirPreco(10,0.05,false) as string; // não resulta em erro
console.log(typeof descontoFinalS as string) // ainda é um numero


const descontoFinalN = <number>exibirPreco(100,0.05,false);

console.log(descontoFinalS)
console.log(descontoFinalN)


//==> Exemplo 02 - Type Assertion
console.log(`\n\t==> Exemplo 02\n`);

type Humano ={
        nome: string;
        idade: number;
        idioma:string;

}

const humano = {
        idade: 25,
        idioma: 'Português'
}
const humano0 = humano as Humano
// vai jogar o erro no toUpperCase mas o err tá no typeAssertion
// o compilador não indetifica o erro
// console.log(humano0.nome.toUpperCase()) 

// como fazer 
// erro
// vai mostrar que a propriedade está faltando antes de combilar


//const humano1: Humano = humano; //outro tipo de Type Annotations
//console.log(humano1.nome.toUpperCase())



   


