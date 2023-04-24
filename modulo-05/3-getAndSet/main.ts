{/*

            Get e Set

*/}
export {}
//==> Exemplo 01 - GET
console.log(`\n\t==> Exemplo 01\n`);

class Quadrado{
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado(){
        return this._altura * this._largura;
    }
}
console.log(new Quadrado().calcularQuadrado)


//==> Exemplo 02 - SET
console.log(`\n\t==> Exemplo 02\n`);

class Pessoa {
    nome:string;

    retornarNomePessoa(setNomePessoa: string){
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('teste de silva')
console.log(`Meu nome é ${pessoa.nome}`)


//==> Exemplo 03 - GET 
console.log(`\n\t==> Exemplo 03\n`);

class Estudante {
    private _nome = 'teste de silva';
    private _semetre: number;
    private _curso: string;

    public get nomeEstudante(){
        return this._nome;
    }
}
const estudante = new Estudante()
const resultado = estudante.nomeEstudante;
console.log(resultado)


//==> Exemplo 04 - SET
console.log(`\n\t==> Exemplo 04\n`);
class Estudante_02{
    nome: string;
    semestre:number;
    curso:string;

    constructor(nomeEstudante:string, semestre:number, curso:string){
        this.nome = nomeEstudante;
        this.curso = curso;
        this.semestre = semestre;
    }

    public get cursos(){
        return this.curso;
    }

    public set setCursos(setCursos: string){
        this.curso = setCursos;
    }

}

const estudante_02 = new Estudante_02('higor', 7, 'BICT');
console.log(estudante_02)

estudante_02.setCursos = 'Mudei o nome aqui '

console.log(estudante_02)

   


