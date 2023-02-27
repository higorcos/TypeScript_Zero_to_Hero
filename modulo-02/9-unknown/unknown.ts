{/*

            Unknown
        //Verifica a variável diferente do Any

*/}

//==> Exemplo 01 - Unknown  
console.log('\n ==> Exemplo 01 - Unknown\n')

let value: unknown;

value = true; 
value = 123;
value = [1,2,3];
value = 'Aqui';
value =  {'id': 1, 'name': 'higor'};

//Não acontece nenhum erro 

{/*
//==> Exemplo 02 - Erro ao tentar definir outro tipo e não só o valor
   

        let value02: unknown;

        //--Não é possível
        value02:boolean = true;  
        value02:number = 123;
        value02:Array<number> = [1,2,3]; 
        value02:string = 'Aqui';
*/}





//==> Exemplo 03 - Diferença entre: 'any' vs 'unknown'  
console.log('\n ==> Exemplo 03 - Diferença entre: "any" vs "unknown"\n')

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;



console.log(algumaCoisaAny.toFixed(2)) 
            //toFixed tá esperando um número 

            //Unknown vai verificar que não é um número e não vai permitir compilar
            // Any vai quebrar em produção pois vai permitir o erro
//console.log(algumaCoisaUnknown.toFixed(2))

    //só assim vai ser possível a compilação
if(typeof algumaCoisaUnknown === 'number'){
    console.log(algumaCoisaUnknown.toFixed(2))
}else{
    console.log('não é')
    
}
