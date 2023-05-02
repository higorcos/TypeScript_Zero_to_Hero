{/*

        Interface (alias Type = "Principal diferença é a delaração")

        Contrato Sintático 
        Entidae deve obedecer
        As intefaces definem: propriedades, métodos e eventos
        Declaração dos membros
        Estrutura padrão que as classes derivadas que deveriam seguir

*/}
export {}
//==> Exemplo 01 - Interface Simple
console.log(`\n\t==> Exemplo 01  - Interface Simple\n`);

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

const camily: Pessoa = {
    nome: 'Camily',
    sobrenome: 'Costa',
    idade: 15
}

const exibirDados = (pessoa:Pessoa):Pessoa =>{
    return pessoa
}
console.log(exibirDados(camily))


//==> Exemplo 02 - com propriedades opcionais
console.log(`\n\t==> Exemplo 02 com propriedades opcionais\n`);

interface Livro {
    titulo:string,
    autor: string,
    paginas?: number //=> opcional
}

const livro00:Livro ={
    titulo:'clean code',
    autor:'Robert'
}
const livro01:Livro ={
    titulo:'SCRUM',
    autor:'Não definido',
    paginas: 203
}
console.log(livro00)
console.log(livro01)

//==> Exemplo 03 - com propriedades de somente leitura e opcionais
console.log(`\n\t==> Exemplo 03 - com propriedades de somente leitura e opcionais\n`);

interface Carro{
   readonly modelo:string,
   ano:number,
   valor?:number
}

const fusca: Carro = {
    modelo: 'Fusca 1.0',
    ano: 1999,
}
fusca.ano=1998 
// fusca.modelo = 'Fusca 2.0' // Propriedade não pode ser alterada
console.log(fusca)


//==> Exemplo 04 - com implemts Class
console.log(`\n\t==> Exemplo 04 => Com implemts\n`);

interface IAnimal {
    nome:string,
    idade:number,
    estarVivo:boolean,
    comer(tipoComida:string):void;
}

class Gato implements IAnimal{
    nome: string;
    idade: number;
    estarVivo: boolean;

 
    constructor(nome:string,idade:number,estarVivo:boolean) {  
        this.nome = nome;
        this.idade = idade;
        this.estarVivo = estarVivo;
    }

    comer(tipoComida: string): void {
        console.log(`o gato ${this.nome} está comendo ${tipoComida}`)
    }
}


const cat  = new Gato('Cat00', 10, true);
console.log(cat);
cat.comer('Ração');


//==> Exemplo 05 - Interface vs Type Alias
console.log(`\n\t==> Exemplo 05 =>  Interface vs Type Alias\n`);

   type Pessoa02 = {
    nome:string,
    sobrenome: string,
    idade?:number
   }
   const pessoa02: Pessoa02 = {
    nome: 'teste',
    sobrenome: 'da silva'
   }

   console.log(pessoa02)


   


