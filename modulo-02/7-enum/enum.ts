//==> Exemplo 01 - Numeric Enums (Enums Numérico) 
console.log(' \n ==> Exemplo 01 -  Numeric Enums (Enums Numérico) \n')
 enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
 }

console.log(Idioma)


//==> Exemplo 02 - String Enums 
console.log(' \n ==> Exemplo 02 - String Enums  \n')

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX'
}

console.log(Dia.Segunda)

//==> Exemplo 03 -  Como podemos acessar um valor de um Enum com uma chave: (usando a const)
console.log(' \n ==> Exemplo 03 -  Como podemos acessar um valor de um Enum com uma chave: (usando a const) \n')

const enum Comida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    churrasco = 'Churrasco',
}

const comidaF = (c: Comida)=>{
    return `${c} é uma comida muito boa!!`;
}
console.log(comidaF(Comida.churrasco));


//==> Exemplo 04 -  Quando usar Enum !!
console.log(' \n==> Exemplo 04 -  Quando usar Enum !!  \n')

enum Task {
    Todo = 'Todo',
    Progress = 'Progress',
    Done =  'Done'
}

const doneTask = {
    id:1,
    status: Task.Done,
    descrição: "SPD!!"
}
    if(doneTask.status === Task.Done){
        console.log(`Tarefa ${doneTask.descrição} finalizado com Sucesso `)
    }
