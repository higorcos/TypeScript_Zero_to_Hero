{/*
    Never

    -Não contém valor
    -Não podemos atribuir valor ao tipo Never
    -Retorno de função que gera error
    
*/}


//==> Exemplo 01 : Never - Throw Exception

function error(message: string): never {
    throw new Error(message);
}

//console.log(error('MSG PROP.01'))

//==> Exemplo 02 : Never inferido automaticamente

const rejectMessage=()=>{
    return error('MSG PROP.02')
}

//console.log(rejectMessage())

// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'

//O typescript identifica que é um loop e que não tem nenhum objetivo
// ele identifica que é algo malicioso (loop, função que sempre dá erro)
// se for adicionado o break, não será um loop e a função passa a ser void

const loopInfinito = () =>{
    while(true){
        console.log('oi,Develop')
        //break
    }
}

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void' 

const algumaCoisaNull: null = null;
//const algumaCoisaNever: never = null; //never nunca vai acontecer //não executar (Vai dar erro)

console.log(algumaCoisaNull)

//console.log(algumaCoisaNever)

   


