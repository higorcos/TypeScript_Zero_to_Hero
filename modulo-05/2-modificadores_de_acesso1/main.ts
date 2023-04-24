{/*

    modificadores_de_acesso

        readonly

        Somente leitura 
        acessados dora da classe
        não pode ser alterado 
        inicializados da declaração ou dentro dos construtores


*/}

export {}

console.log(`\n\t==> Exemplo 01\n`);

class Funcionarios{
    readonly nascimento:Date;

    constructor(nasc:Date){
        this.nascimento = nasc;

    }
    //testar se é possivel modificar o readonly em um metodo
    testeMetodo(nasc:Date):void{
       // this.nascimento = nasc; //Não é possivel
    }
}
 const funcionarios = new Funcionarios(new Date(2001, 6, 23));
 //funcionarios.nascimento = new Date(2001, 6, 23); //erro Compilação


 //==> Exemplo 02 - outra forma de declarar
class Funcionarios1{
    
    constructor(readonly nasc:Date){
        this.nasc = nasc;
    }
}

 //==> Exemplo 02 - interface

 interface Ifuncionario{
    codigo:number;
    nome: string;
    }


const funcionario_02: Readonly<Ifuncionario> = {
    codigo: 20,
    nome: 'higor',
    //as propriedade são readonly

    //não consegui adicionar um metodo aqui 
}

// funcionario_02.codigo = 200; //erro
// para o erro não ocorrer é só tirar o Readonly