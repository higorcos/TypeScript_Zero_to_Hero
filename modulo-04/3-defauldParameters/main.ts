{/*

        Default Parameters

        -Obrigatório
        -valor indefinio
        -valor padrão

            
*/}
export {}
//==> Exemplo 01 
console.log(`\n\t==> Exemplo 01\n`);

const descontoCompra =(preco:number, desconto = 0.08): number=>{

        return preco * (1 - desconto);
}
console.log(descontoCompra(100));

//==> Exemplo 02

console.log(`\n\t==> Exemplo 02\n`);

const exibirMesagem = (nome:string, saudar= 'Oi, '): string=>{
        return saudar + nome;
}
console.log(exibirMesagem('Jessica'));
   


   


