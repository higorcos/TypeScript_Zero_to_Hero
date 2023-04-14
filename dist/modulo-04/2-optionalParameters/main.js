"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
function informarDadosPessoas(idPessoa, nome, email, email2) {
    console.log(email, email2);
    if (email != undefined) {
        if (email2 != undefined) {
            console.log(` Id funcionario:\n ${idPessoa} \n Nome:\n ${nome}\n  Email ${email}\n  email2: ${email2}`);
        }
        else {
            console.log(` Id funcionario:\n ${idPessoa} \n Nome:\n ${nome}\n  Email ${email}\n `);
        }
    }
    else {
        console.log(` Id funcionario:\n ${idPessoa} \n Nome:\n ${nome}\n  `);
    }
}
console.log(`\n\t==> Exemplo 02\n`);
const mesagemLog = (msg, idUser) => {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, msg, idUser || 'Usuário não conectado');
};
mesagemLog('Atualizar Página');
mesagemLog('Atualizar Página', 2123);
console.log(`\n\t==> Exemplo 03\n`);
let pessoa;
pessoa = {
    idFuncionario: 23432,
    nome: 'higor',
};
console.log(pessoa);
