//Formas de declaração
let F1:Array<string> = ['','']
let F2:string[]= ['','']
let F3:string[] = new Array('','')




// => Exemplo 01 - Uso de colchetes
let frutas: string[]= ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(frutas[2])


// => Exemplo 02 - Array Object

let frutasSegundaDeclaração: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(frutasSegundaDeclaração[2])
//Array de objetos
let frutasObject: Array<object> = [{'icone':'🍍', 'CodigoFruta':'Aba01',},{'icone':'🍎', 'CodigoFruta':'MA01',}]
console.log(frutasObject)


// => Exemplo 03 - Adicionar mais strings com método push
let pessoas: Array<string> = ['Higor', 'Hugo']
pessoas.push('Nathy')
console.log(pessoas)

// => Exemplo 04 - Identificar tamanho array - length
console.log(frutas.length)


// => Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumero: Array<number> = [1,2,3,4,5]
listaNumero = [...listaNumero,6,7,8,9,10]
console.log(listaNumero)

// => Exemplo 06 - Exemplo de array com laço de iteração
let linguagemArray:string[] = new Array('JavaScript', 'Python')

const listItens = (linguagem:Array<string>)=>{ // linguagem: string[] 
    for (let i = 0; i < linguagem.length; i++) {
        console.log(linguagem[i]) 
    }
}
 listItens(linguagemArray)
 console.log('ww')



