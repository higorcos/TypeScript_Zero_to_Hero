{/*

       

*/}
export {}
//==> Exemplo 01 => Interface com extends
console.log(`\n\t==> Exemplo 01 => Interface com extends\n`);

interface Animal00 {
    nome: string;
    idade: number;
    porte: string;
}


interface Cachorro00 extends Animal00 {
    raca: string;
}

//Forma de instaciar
const meuCachorro: Cachorro00 = {
    nome: '',
    idade: 0,
    porte: 'pequeno',
    raca: 'Akita'
}

console.log(meuCachorro.raca)


//==> Exemplo 02 => Extensão de múltiplos interfaces
console.log(`\n\t==> Exemplo 02 => Extensão de múltiplos interfaces \n`);

interface Igato {
    nome: string;
   
}

interface Icachorro {
    nome: string;
    
}

interface Animal extends Icachorro,Igato {
    raca: string;
}

//Forma de instaciar
const meuGato: Animal = {
    nome: 'meu Gato',
    raca: 'Não definido'
}

console.log(meuGato);

//==> Exemplo 03 => Uso do Omit (alterar tipo)
console.log(`\n\t==> Exemplo 03 => Uso do Omit \n`);

interface Funcionario {
    id: number;
    nome: string;
}


//alterando uma propriedade
interface Desenvolvedor extends Omit<Funcionario, 'id'>{
    id:string,
    linguagemProgramacao: string,
}
//alterando mais de uma propriedade
interface Desenvolvedor1 extends Omit<Funcionario, 'id'|'nome'>{
    id:string,
    nome: number
    linguagemProgramacao: string,
}
//intanciando um funcionario padrao
const fun_padrao: Funcionario = {
    id: 33,
    nome: 'Funcionario padrão'
}
//instaciado 
const desenvolvedor: Desenvolvedor = {
    id:'dev_js_2023/05/02',
    nome:'Glaucia Costa',
    linguagemProgramacao: 'typescript'
}

//instaciado 
const desenvolvedor1: Desenvolvedor1 = {
    id:'dev_js_2023/05/02',
    nome: 2345762394,
    linguagemProgramacao: 'typescript'
}

console.log(fun_padrao)
console.log(desenvolvedor)
console.log(desenvolvedor1)


////Outra solução seria 
interface FuncionarioSemOmit {
    id: number | string; //aceita os doiss
    nome: string;
}