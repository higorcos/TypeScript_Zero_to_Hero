{/*
        typeof == tipos padrão da liguagem
       instanceof == tipos avançados e criados pelo dev

       in == 

*/}
export {}
//==> Exemplo 01 - typeof
console.log(`\n\t==> Exemplo 01\n`);

type alfanumerico = string|number;


const exibirTipo = (a:alfanumerico, b:alfanumerico) =>{
    if(typeof a == 'number' && typeof b == 'number'){
        return `É um número:  ${a + b}`;

    }else if(typeof a == 'string' && typeof b == 'string'){
        return `É uma string  ${a.concat(b)}`;
    }
    throw new Error('Argumento inválido!');
}
console.log(exibirTipo('Texto', '2'))
console.log(exibirTipo(4, 2))
// console.log(exibirTipo(4, '2')) //Vai cair no throw new Error





//==> Exemplo 02 - instanceof
console.log(`\n\t==> Exemplo 02\n`);

class Carro {
     nome: string;
     marca: string;

     constructor(nome:string, marca:string) {
        this.marca = marca;
        this.nome = nome;
     }
}


class Moto {
    constructor(public nome:string, public ano: number){
        this.nome = nome;
        this.ano = ano;
    }
}

const detalhesVeiculo = (veiculo:Carro | Moto) => {
    if(veiculo instanceof Carro){
        return `O nome do carro é ${veiculo.nome} e a marcar é ${veiculo.marca}`;
    }else if(veiculo instanceof Moto){
        return `O nome da moto é ${veiculo.nome} e o ano é ${veiculo.ano}`;
    }
}


const moto = new Moto('CB100', 2015);
const carro = new Carro('Jetta', 'Volkswagen');

console.log(detalhesVeiculo(moto))
console.log(detalhesVeiculo(carro))





//==> Exemplo 03 - in
console.log(`\n\t==> Exemplo 03\n`);

class Animal {
    grupo: string;
}

class Ave implements Animal{
    grupo: string;
    tamanhoBico: string 

    constructor(grupo:string, tamanhoBico: string) {
        this.grupo = grupo;
        this.tamanhoBico = tamanhoBico;
    }
}
   

class Peixe implements Animal{
    grupo: string;
    tipoAgua: string; 

    constructor(grupo:string, tipoAgua: string) {
        this.grupo = grupo;
        this.tipoAgua = tipoAgua;
    }
}

const nadar = (grupo: string)=>{
    console.log(`O ${grupo} está nadando `);
}
const voar = (grupo: string)=>{
    console.log(`O ${grupo} está voando `);
}

const mover = (animal:Animal)=>{
    if('tipoAgua' in animal){
        nadar(animal.grupo);
        // nadar((animal as Peixe).grupo); // Convertendo para o tipo AVE
    }else if('tamanhoBico' in animal){
         // nadar(animal.grupo);
         voar((animal as Ave).grupo); // Convertendo para o tipo  PEIXE
    }
}

mover(new Peixe('Peixe', "Doce"))
mover(new Ave('Beija-Flor', "Pequena"))





   


   


