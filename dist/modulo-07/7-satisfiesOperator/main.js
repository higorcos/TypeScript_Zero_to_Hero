"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
const pessoa = {
    localNascimento: 'Bahia',
    residencia: { x: 0, y: 0 }
};
console.log(pessoa.localNascimento.toUpperCase());
console.log(`\n\t==> Exemplo 02\n`);
const config = {
    host: 'localhost',
    port: 3000,
    tryReconnect: () => true,
};
const connect = () => {
    let { host, port, tryReconnect } = config;
    createdConnection(host, `${port}`, tryReconnect(), 10);
};
