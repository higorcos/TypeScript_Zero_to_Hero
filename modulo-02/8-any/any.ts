{/*
 Any é o tipo padrão de qualquer variável que não foi tipada 

*/}
//==> Exemplo 01 -  Tipo Any
console.log('\n ==> Exemplo 01 -  Tipo Any  \n')

const a: any = 21;
const b: any = ['Higor'];

const result = a+b;
console.log(result);



//==> Exemplo 02 -  Tipo 'any' inferido implicitamente
console.log('\n ==> Exemplo 02 -  Tipo "any" inferido implicitamente \n')

let qualquercoisa, qualquercoisa02
qualquercoisa = 'Aqui qualquer coisa'
qualquercoisa02 = 23

console.log(qualquercoisa)
console.log(qualquercoisa02)


//==> Exemplo 03 -  Quando devemos usar Any
console.log('\n ==> Exemplo 03 -  Quando devemos usar Any \n')

//os campos são string mas ele retorna Any
const form: {[dataFoms: string]: any}={
    nome: 'Higor',
    age: 21,
}

console.log('')


