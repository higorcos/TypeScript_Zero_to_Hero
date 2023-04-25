{/*
       atributos static
       compartilhada entre todas as instâncias 
       não podemos acessar as propriedae da instância da classe
       palavra reservada "static"
       para acessar tem que chamar a propria classe  nomeClass.atributoStatic

       Metodos static
        Quando usar ??
            verificar regras de negócios
            verificar retrições de outra classe 
            implementar factory method
            abstract factory
            quando a propriedade não deve mudar (NUNCA)


            
*/}
export {}
//==> Exemplo 01 
console.log(`\n\t==> Exemplo 01\n`);

    class Funcionario{
        static contratacoes = 0 ; 
        /**
         *
         */
        constructor(
            private nome: string,
            private sobrenome: string,
            private titulo:string,
            ) {
                //para acessar tem que chamar a propria classe  nomeClass.atributoStatic
                Funcionario.contratacoes++;
        } 
        static verificar(){
            return this.contratacoes
        }
        verificar(){
            return Funcionario.contratacoes
        }
    }

    const funcionario0 = new Funcionario('higor','costa','dev');
    const funcionario1 = new Funcionario('hugo','costa','Padre');

    console.log(Funcionario.contratacoes)
    console.log(Funcionario.verificar()) // metodo não estático
    console.log(funcionario0.verificar())


//==> Exemplo 02 - static privada 
console.log(`\n\t==> Exemplo 02\n`);

class Funcionario1{
    private static contratacoes = 0 ; 
    /**
     *
     */
    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo:string,
        ) {
            //para acessar tem que chamar a propria classe  nomeClass.atributoStatic
            Funcionario1.contratacoes++;
    }
    public static verificar(){
        return Funcionario1.contratacoes
    }
}

const funcionario2 = new Funcionario1('higor','costa','dev');
const funcionario3 = new Funcionario1('hugo','costa','Padre');
const funcionario4 = new Funcionario1('hugo','costa','Padre');


// console.log(Funcionario1.contratacoes) // não é possivel 
console.log(Funcionario1.verificar())



   
   
//==> Exemplo 03
console.log(`\n\t==> Exemplo 03\n`);

type Raças = 'Spitz Alemão'| 'Buldogue' | 'Pub' | 'Akita' | 'Poodle' ;

class Cachorro {
    public nome: string;
    public idade: number;
    public raça: Raças[];
    public static qtdCachorroVendido = 0;

    constructor(
        nome: string,
        idade: number,
        raça: Raças[]
    ) {
        this.nome = nome;
        this.idade = idade; 
        this.raça = raça; 

        Cachorro.qtdCachorroVendido++;
    }
    public exibirInformações():void{
        console.log(`O cachorro é ${this.nome} tem ${this.idade}`)
    }
    public static exibirNumeroVendas(){
        console.log(Cachorro.qtdCachorroVendido)
    }


}

const dog0 = new Cachorro('dog0',0.3,['Akita']);
const dog1 = new Cachorro('caramelo',0.3,['Poodle']);

dog0.exibirInformações()
Cachorro.exibirNumeroVendas()