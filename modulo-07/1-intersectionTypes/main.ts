{/*
    Intersectioin Types (interseção)

        Combinação de varios tipo 
        O resultado é um inteface com todos as caracteristicas existente
        Operador &

*/}
export {}

interface DadosBancarios {
    conta: number;
    agencia: number;
    banco:string;
}
interface Cliente{
    nome:string;
    email: string;
}
interface DadosPessoaisFisica{
    cpf:number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaisFisica;

const dadosHigor: DadosCliente = {
    nome:   'higor',
    email: '@gmail.com',
    conta: 34234,
    agencia: 1001,
    banco: 'Nunbak',
    cpf:  20052323,

}



console.log(dadosHigor)

   
// Unions 

interface ConjuntoA{
    nome:string;
    tipo: string;
    a:number,
   
    
}

interface ConjuntoB{
    nome:string;
    tipo: string;
    b:number,
   
}

type ConjuntoC = ConjuntoA | ConjuntoB;

const resultado: ConjuntoC = {
    nome: 'oo',
    tipo: 'fa',
    a:1
    

}

console.log(resultado)


   


