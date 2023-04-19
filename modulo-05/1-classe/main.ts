{/*

                Classe 

*/}
export {}
//==> Exemplo 01 
console.log(`\n\t==> Exemplo 01\n`);


class Pessoa {
    nome:string;
    idade:number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade
    }

    mostrar():string {
     return `O nome é ${this.nome}, a idade é ${this.idade}`   
    }
}

const pessoa = new Pessoa('Keven',20);
    console.log(pessoa.mostrar())

//==> Exemplo 02 - Sem constructor
console.log(`\n\t==> Exemplo 02\n`);

class Estudante {
    codigo: number;
    nome: string;


    //tem apenas metodo 
    listar():void{
        console.log(`O nome é ${this.nome} com o codigo ${this.codigo}`)
    }
}

const estudante = new Estudante();
estudante.codigo=293056;
estudante.nome='ALUNO SILVA SILVA'

estudante.listar();

//==> Exemplo 03 - Com constructor
console.log(`\n\t==> Exemplo 03\n`);


class Estudante01 {
    codigo: number;
    nome: string;

    constructor(codigo:number,nome:string){
        this.codigo = codigo;
        this.nome= nome;
    }

    
}

const estudante01 = new Estudante01(9965,'1- ALUNO COM CONTRU');
const estudante02 = new Estudante01(11,'2 - ALUNO COM CONTRU');

estudante02.codigo=293056;
estudante02.nome='NOME SENDO ALTERADO' //alterando atributo

console.log(estudante01)
console.log(estudante02)



   


