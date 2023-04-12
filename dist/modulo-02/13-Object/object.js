"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
const pessoa = {
    nome: 'Higor',
    sobrenome: 'Costa',
    idade: '21',
    função: 'Dev fullstack',
};
const onboarding2 = (funcionario) => {
    return 'Seja bem-vinda ' + funcionario.nome;
};
const onboarding03 = (funcionario) => {
    return 'Seja bem-vinda '
        +
            funcionario.nome
        +
            ' Sua função é: '
        + funcionario.funcao;
};
const onboarding04 = (funcionario) => {
    return 'Seja bem-vinda '
        +
            funcionario.nome
        +
            ' Sua função é: '
        + funcionario.funcao
        +
            ' Na liguagem: '
        + funcionario.linguagem;
};
const onboarding05 = (funcionario) => {
    return ' Seja bem-vinda '
        + funcionario.nome
        + '\n'
        + ' Sua função é: '
        + funcionario.funcao
        + '\n'
        + ' Na liguagem: '
        + funcionario.linguagem
        + '\n'
        + ' Seu email: '
        + funcionario.email;
};
const onboarding06 = (funcionario) => {
    return ' Seja bem-vinda '
        + funcionario.nome
        + '\n'
        + ' Sua função é: '
        + funcionario.funcao
        + '\n'
        + ' Na liguagem: '
        + funcionario.linguagem
        + '\n'
        + ' Seu email: '
        + funcionario.email;
};
const filho = {
    nome: 'Higor',
    sobrenome: 'Costa',
    idade: 21,
};
const usuario = {
    nome: 'higor',
    email: 'higor@dev.com'
};
const admin = {
    nome: 'higor AD',
    email: 'AD@dev.ad.com',
    admin: true,
};
console.log('==> Exemplo 09 - Generic Objects');
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
