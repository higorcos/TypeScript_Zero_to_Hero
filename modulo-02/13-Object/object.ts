{/*

    Object

    -Representa valores que não são primitivos
    -Melhor forma de representar dados
    -Podem ser anônimos ou não (interface ou type alias)

    -Modificadores de propriedades
        -tipo
        -optional
        -pode ser gravada

    -Diferença entre 
        -objetc(min) - Qualquer valor que não seja um valor primitivo
        -Objetc(mai) - Descreve a Funcionalidade disponivel em todos os objetos
        -{}(vazio) - Não possue propriedade própria

*/}
export {};

// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const pessoa = {
    nome:'Higor',
    sobrenome:'Costa',
    idade:'21',
    função:'Dev fullstack',
}

    //console.log('==> Exemplo 01 -> Exemplo básico do uso do Type Object')
   // console.log(pessoa)

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)

const onboarding2 =(funcionario: { nome:string })=>{
    return 'Seja bem-vinda ' + funcionario.nome;
}
//console.log('==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)')

//console.log(onboarding2({nome: 'Higor'}))

// ==> Exemplo 03 -> object nomeados

interface Pessoa03 {
    nome:string;
    funcao: string;
}
const onboarding03 = (funcionario: Pessoa03)=>{
    return 'Seja bem-vinda '
     + 
     funcionario.nome
     +
     ' Sua função é: '
     + funcionario.funcao ;
}

//console.log('==> Exemplo 03 -> object nomeados')
//console.log(onboarding03({nome: 'Higor', funcao: 'dev'}))


// ==> Exemplo 04 -> object como type alias

type PessoaEx04 = {
    nome:string,
    funcao: string,
    linguagem: string,
}

const onboarding04 = (funcionario: PessoaEx04)=>{
    return 'Seja bem-vinda '
     + 
     funcionario.nome
     +
     ' Sua função é: '
     + funcionario.funcao
     + 
     ' Na liguagem: '
     + funcionario.linguagem
}

//console.log('// ==> Exemplo 04 -> object como type alias')
//console.log(onboarding04({nome: 'Higor', funcao: 'dev', linguagem: 'javascript/typescript'}))



// ==> Exemplo 05 -> usando optional no object

interface PessoaEx05 {
    nome:string,
    funcao: string,
    linguagem: string,
    email?: string,
}

const onboarding05 = (funcionario: PessoaEx05)=>{
    return ' Seja bem-vinda '
     + funcionario.nome
     + '\n'
     +' Sua função é: '
     + funcionario.funcao
     + '\n'
     + ' Na liguagem: '
     + funcionario.linguagem
     + '\n'
     + ' Seu email: '
     + funcionario.email
}

//console.log('// ==> Exemplo 05 -> object como type alias')
//console.log(onboarding05({nome: 'Higor', funcao: 'dev', linguagem: 'javascript/typescript'}))
//console.log(onboarding05({nome: 'Higor', funcao: 'dev', linguagem: 'javascript/typescript',email:'higo.costa@higor.dev.com'}))



// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)

interface PessoaEx06 {
    nome:string,
    funcao: string,
    linguagem: string,
    readonly email: string, //não pode ser gravado durante o momento da compilação
}

const onboarding06 = (funcionario: PessoaEx06)=>{
    return ' Seja bem-vinda '
     + funcionario.nome
     + '\n'
     +' Sua função é: '
     + funcionario.funcao
     + '\n'
     + ' Na liguagem: '
     + funcionario.linguagem
     + '\n'
     + ' Seu email: '
     + funcionario.email
}

//console.log('Exemplo 06 -> Propriedade readonly')
/*console.log(onboarding06(
    {
     nome: 'Higor',
     funcao: 'dev', 
     linguagem: 'javascript/typescript',
     email:'higo.costa@higor.dev.com'
 }))*/



// ==> Exemplo 07 -> tipos de extensões (heranças)

interface Mae{
    nome: string;
}

interface Pai{
    sobrenome: string;
}

interface Filhos extends Mae, Pai{
    idade: number;
}

const filho: Filhos = {
    nome: 'Higor',
    sobrenome: 'Costa',
    idade: 21,
}

    //console.log(filho)

// ==> Exemplo 08 -> Tipos de Interseções

interface Cachorro {
    tipo: string,
}
interface Gato {
    tipo: string,
}

type Animal = Cachorro & Gato; //interserção entre grupos

// ==> Exemplo 09 - Generic Objects

type Usuario = {
    nome: string,
    email:string
}
type Admin ={
    nome: string,
    email: string,
    admin: true,
}

const usuario: Usuario = {
    nome: 'higor',
    email: 'higor@dev.com'
}
const admin: Admin = {
    nome: 'higor AD',
    email: 'AD@dev.ad.com',
    admin: true,
}
console.log('==> Exemplo 09 - Generic Objects')

function acessarSistema<T>(usuario: T):T {  //generico, vai aceitar tanto usuario quando admin
    return usuario;
}
console.log(acessarSistema<Usuario>(usuario))
console.log(acessarSistema<Admin>(admin))


//function acessarSistema(usuario: Usuario): Usuario{
 //   return usuario;
//}
//console.log(acessarSistema(usuario))

  
   


   


