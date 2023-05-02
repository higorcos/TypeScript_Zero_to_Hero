{/*

        Classes Abstratas 

        Não pode ser instanciada ("Criada = New classe")
        Classe projetada para ser derivada
        Funcionalidades compartilhadas em grupos de classes semelhantes
        Podem ter implementações de função 
        Permite a reutilização de código entre grupos de objetos semelhantes

*/}
export {}
//==> Exemplo 01 
console.log(`\n\t==> Exemplo 01\n`);

abstract class Funcionario {
    constructor(private nome:string, private sobrenome: string){ }


    abstract retornarSalario():number;
    
    get retornaNomeCompleto():string {
        return `${this.nome} ${this.sobrenome}`;
    }
    
    emitirContraCheque():string {
        return `${this.retornaNomeCompleto} - Salário: ${this.retornarSalario()}`
    }
}

// const Funcionario = new Funcionario('hugo', 'costa'), //erro

class FuncionarioCLT extends Funcionario {
    constructor(nome:string,sobrenome:string,private salario: number){
        super(nome,sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome:string,sobrenome:string,private valorHora: number,private  horasTrabalhadas: number){
        super(nome,sobrenome);
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}


const nathy = new FuncionarioCLT('Nathy', 'De Jesus',1200);
const higor = new FuncionarioPJ('Higor', 'Costa', 20,200);


console.log(higor.retornarSalario())
console.log(nathy.retornarSalario())


   


   


