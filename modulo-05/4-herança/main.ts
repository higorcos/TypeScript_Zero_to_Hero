{/*
        HERANÇA
            criar novas classes a partir de uma existente
            classe pai/superclasse
            classe filha/subclasse
            Palavra "extends"
            
*/}
export {}
//==> Exemplo 01 
console.log(`\n\t==> Exemplo 01\n`);

class Animal {
    mover(distancia =0 ){
        console.log("Animal se moveu..."+distancia+ 'metros')
    }
}

class Cachorro extends Animal{
    latir(){
        console.log('Au Au !!')
    }
}
 const akita = new Cachorro();
 akita.latir();
 akita.mover();


//==> Exemplo 02
console.log(`\n\t==> Exemplo 02\n`);

class Pessoa {

    //Atributos sendo definidos no contructor
    constructor(private nome:string, private sobrenome:string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        
    }
    mostrarNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentar(){
        return `Oi, o meu nome é: ${this.nome} ${this.sobrenome}`;
    }
}

class Funcionario extends Pessoa {

    constructor(nome: string, sobrenome:string, private funcao:string) {
        super(nome, sobrenome);
        
    }
}


const funcionario0 = new Funcionario('Nathy','de jesus','pisicologa');
console.log(funcionario0.apresentar());
console.log(funcionario0.mostrarNomeCompleto())
   


   


