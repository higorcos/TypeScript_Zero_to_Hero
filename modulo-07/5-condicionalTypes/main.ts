{/*

        Conditional Types

            Definem tipos de valor com base nas condições
            Usado para fluxo de código

            condicinal
            ? (verdadeiro): (falso)
    

*/}
export {}
//==> Exemplo 01 - Condicional Types
console.log(`\n\t==> Exemplo 01\n`);

type Pessoa = {
    nome: string,
    idade: number,
    endereco: string,
}

type Empresa = {
    nome:string,
    cnpj: string,
    
}

type EnderecoPessoa={
    numero: number,
    bairro: string,
    cidade: string,
}

type EnderecoEmpresa = {
    localizacao: 'rua'|'avanida'|'praça';
}

type EnderecoFinal<T> = T extends {endereco: string} ? EnderecoPessoa : EnderecoEmpresa;
//{endereco: string} // é a condicional pois só PESSOA tem esse atributo

const enderecoPessoa : EnderecoFinal<Pessoa> ={
    numero: 123,
    bairro: 'rua',
    cidade: 'São Paulo',
}

const enderecoEmpresa : EnderecoFinal<Empresa> ={
    localizacao: 'rua',
}

console.log(enderecoPessoa);
console.log(enderecoEmpresa);


//==> Exemplo 02

console.log(`\n\t==> Exemplo 02\n`);

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';  ;
type filtroArquivosAudio<T> = T extends 'mp4' | 'mp3' ? T : never; //T == FormatoArquivos

type ArquivosAudio = filtroArquivosAudio<FormatoArquivos>;


//Definido como tipo
const arquivosAudio0: ArquivosAudio = 'mp3';
// const arquivosAudio1: ArquivosAudio = 'jpg'; // erro a extensão não é de Video

console.log(arquivosAudio0)
   


   


