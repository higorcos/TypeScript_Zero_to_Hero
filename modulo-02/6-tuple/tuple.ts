//==> Exemplo 01 - Uso simples de Tuplas 
let pessoas0: [string , string, number]= ['higor', 'dev junior', 21]
console.log(' \nExemplo 01 - Uso simples de Tuplas \n')
console.log(pessoas0)

//==> Exemplo 02 - Acessando o valor da Tupla
console.log(' \nExemplo 02 - Acessando o valor da Tupla \n')
console.log(pessoas0[0])


//==> Exemplo 03 - Usando com labels
console.log(' \nExemplo 03 - Usando com labels \n')

let pessoas2: [name: string , office: string, age:number];
pessoas2 = ['higor', 'dev junior', 21]
console.log(...pessoas2)

//==> Exemplo 04 - Usando com Spread Operator
console.log(' \nExemplo 04 - Usando com Spread Operator \n')
let listaFrutas : [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(...listaFrutas)

//==> Exemplo 05 - Lista Heterogênea 
console.log(' \nExemplo 05 - Lista Heterogênea  \n')
let listaFrutas02: [number,boolean, ...string[]] = [ 5 , true, ...listaFrutas]
console.log(...listaFrutas02)


//==> Exemplo 06 - Uso de Função
console.log(' \nExemplo 06 - Uso de Função \n')

const listPerson = (name: string[], age: number[]) =>{

    return [...name , ...age]
}
 
 console.log( listPerson(['higor', 'hugo'],[22,24]))

//==> Exemplo 07 - Labeled Spread Operator
console.log('\n Exemplo 07 - Labeled Spread Operator\n')

 type Name =
    |[first: string, last:string]   
    |[first: string, midst: string, last:string]

const createdPerson= (...name: Name)=>{
    return [...name]
}

console.log(createdPerson('Higor','Costa'))
console.log(createdPerson('Higor','Pinheiro','Costa'))