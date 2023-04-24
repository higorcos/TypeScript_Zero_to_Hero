{/*

    modificadores_de_acesso

        public(defaul,padrão)
        private (pode ser acessado apenas pela classe )
        protected (acessivel apenas na classe e subclasses)


*/}

export {}

//==> Exemplo 01 - Modificador: public
//consigo alterar por fora da class
// por padrão todos são puclic
console.log(`\n\t==> Exemplo 01\n`);

class Celular {
    marca: string;
    android: number;
    public numeroSIM: number
    ano:number= 2020 //teste Valor padrão

    constructor( marca: string,android: number) {
        this.marca = marca;
        this.android = android;
    }
}
const lg = new Celular('LG', 15.45)
lg.numeroSIM = 98991190311 
console.log(lg)

//==> Exemplo 02 - Modificador: private
console.log(`\n\t==> Exemplo 02\n`);
class Celular01 {
    marca: string;
    android: number;
    private codigoDeSegurança:number

    constructor( marca: string,android: number,codigoDeSegurança:number) {
        this.marca = marca;
        this.android = android;
        this.codigoDeSegurança = codigoDeSegurança;
        
    }
    //testando Metodo com private e mudando ele 
    testeMetodo(codigoDeSegurança:number):void{
        this.codigoDeSegurança = codigoDeSegurança;
    }
}
const sam = new Celular01('SAMSUNG', 15.45,3879873465);
// sam.codigoDeSegurança = 45345 //VAI OCORRER UM ERRO
sam.testeMetodo(11)
console.log(sam)

//==> Exemplo 03 - Modificador: readonly
console.log(`\n\t==> Exemplo 03\n`);
class Celular02 {
    marca: string;
    android: number;
    protected codigoDeSegurança:number

    constructor( marca: string,android: number,codigoDeSegurança:number) {
        this.marca = marca;
        this.android = android;
        this.codigoDeSegurança = codigoDeSegurança;
        
    }
    testeHerençaMetodo():void{

    }
}
class Eletronicos extends Celular02{
    ano:number;

    constructor(marca: string,android: number,codigoDeSegurança:number,ano:number){
        super(marca,codigoDeSegurança,android);
        
        // this.marca = marca;
        this.ano = ano
    }
    mudarCodigodeVerificação(newCod:number):void{
        this.codigoDeSegurança = newCod
    };
}

const motorola = new Eletronicos('motorola', 4,100,2020);
motorola.testeHerençaMetodo(); //o metodo passa para o elemento filho
console.log(motorola)

   