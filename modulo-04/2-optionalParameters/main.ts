{/*

        Optional Parameters
            
*/}
export {}
//==> Exemplo 01 >
console.log(`\n\t==> Exemplo 01\n`);

function informarDadosPessoas(idPessoa:number,nome:string,email?:string,email2?:string){

        console.log(email,email2)
        if(email!= undefined){
                if(email2!= undefined){
                        console.log(` Id funcionario:\n ${idPessoa} \n Nome:\n ${nome}\n  Email ${email}\n  email2: ${email2}`);
                        
                }else{
                        console.log(` Id funcionario:\n ${idPessoa} \n Nome:\n ${nome}\n  Email ${email}\n `);
                        
                }
        }else{
                console.log(` Id funcionario:\n ${idPessoa} \n Nome:\n ${nome}\n  `)

        }
}

// informarDadosPessoas(232,'higor','hi@gmail.com','higor@gmai.com')
// informarDadosPessoas(232,'higor','higor@gmai.com');
// informarDadosPessoas(232,'higor');
// informarDadosPessoas(232,'higor',null,'higor@gmail');

//==> Exemplo 02 - msg de login
        console.log(`\n\t==> Exemplo 02\n`);


        const mesagemLog = (msg:string, idUser?:number)=> {
                const horaLog = new Date().toLocaleTimeString();

                console.log(horaLog, msg, idUser || 'Usuário não conectado')
        }

        mesagemLog('Atualizar Página')
        mesagemLog('Atualizar Página',2123)



//==> Exemplo 03
console.log(`\n\t==> Exemplo 03\n`);

type Pessoa = {
        idFuncionario: number,
        nome:string,
        idade?: number,
        email?:string,
}

let pessoa: Pessoa;

pessoa = {
        idFuncionario: 23432,
        nome: 'higor',

}

        console.log(pessoa)


   


   


