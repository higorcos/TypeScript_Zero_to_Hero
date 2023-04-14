{/*

        Rest Parameters

        -numero ilimitado de parametros
        -Mesmo tipo 
        -ultimo paremetro da função (outros parametros na frente)
        -...
            


        ???
        posso criar um type e usar ele como parametro REST ou somente array ??
*/}
export {}
//==> Exemplo 01 
console.log(`\n\t==> Exemplo 01\n`);

function somarNumero(...numeros:number[]):number{
        let total = 0;
        numeros.forEach(numero => (total += numero));
        return total;
}

console.log(somarNumero(1,2,3,4,5,5));
console.log(somarNumero(1,2));

//==> Exemplo 02
console.log(`\n\t==> Exemplo 02\n`);

const listarFrutas = (frase:string, ...frutas:string[]):string =>{
        return frase + ' ' + frutas.join(', ');
}

console.log(listarFrutas('Lista de compras ',
                        '🥥' ,
                        '🍓' ,
                        '🍌' ,
                        '🍍' , 
                        ))

//==> Exemplo 03

console.log(`\n\t==> Exemplo 03\n`);

 class Produtos {
        public exibirProdutos(...produtos: string[]):void{
                for (const produto of produtos) {
                        console.log(produto)
                }
        }
 }
   
const departamentoInformatica:Produtos = new Produtos();

console.log('Todos os produtos do departamento de informatica disponiveis: ')

departamentoInformatica.exibirProdutos('tv','mouse','pc')




   


