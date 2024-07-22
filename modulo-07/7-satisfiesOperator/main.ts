{/*
    Satisfies Operator

        capacidade de atribuir tipos mais especificos
        Impor uma restrição numa variavel sem alterar seu tipo
       

*/}
export {}
//==> Exemplo 01 
console.log(`\n\t==> Exemplo 01\n`);



type Cidade = NomeCidade | CidadeCoordenadas;

type NomeCidade = 'Bahia' | 'São luis' | "Recife"
type CidadeCoordenadas = {
    x: number;
    y: number;
}

type Pessoa = {
    localNascimento: Cidade;
    residencia: Cidade;
}
   
const pessoa = {
    localNascimento: 'Bahia',
    residencia: {x: 0, y: 0}
} satisfies Pessoa; 


console.log(pessoa.localNascimento.toUpperCase()); //Só aceita pois o satisfies está na instaciação
// console.log(pessoa.residencia.toUpperCase()); //erro foi o segundo tipo não é string


//==> Exemplo 02
console.log(`\n\t==> Exemplo 02\n`);

type Connection = {}

declare function createdConnection(
host: string,
port: string,
reconnect: boolean,
poolsize: number,
): Connection;

type Configuration ={
    host: string,
    port: string | number,
    tryReconnect: boolean | (()=>boolean);
    poolsize?: number

};

const config = {
    host: 'localhost',
    port: 3000,
    tryReconnect: ()=>true,
}satisfies Configuration;

const connect = ()=>{
    let { host, port, tryReconnect } = config;
    createdConnection(host, `${port}`, tryReconnect(), 10);
}
   


