{/*

            Void
        
*/}

//==> Exemplo 01 - Função

const logError = (errorMessage: string) =>{
    console.log(errorMessage)

}

logError('code: 505')

//==> Exemplo 02 - Uso em variáveis
   
let variavelExemploVoid: void;

// variavelExemploVoid = 1;
variavelExemploVoid = undefined;
variavelExemploVoid = null; //Para ser possivel atribuir null a um tipo void (tsconfig = "strictNullChecks": false)
// variavelExemploVoid = 'texto';

   


