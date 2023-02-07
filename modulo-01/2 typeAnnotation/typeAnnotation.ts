// => Variáveis [type Annotations]
let nome : string = 'Higor Costa'
console.log("\n"+nome)

// => Array [type Annotations]
let animais: string[] = ['elefante','cachorro']
console.log("\n"+animais)


// => Objeto [type Annotations]
let carros: {
    nome: string,
    ano: number,
    preço: number,
}

carros = {
    nome: 'Toyota',
    ano: 2021,
    preço: 9000,
}
console.log(carros)

// => function [type Annotations]

const multiplicarNumero =(num1: number, num2:number)=>{
    return num1 *num2
} 

console.log(multiplicarNumero(2,3))


