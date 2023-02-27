"use strict";
console.log(' \n ==> Exemplo 01 -  Numeric Enums (Enums Numérico) \n');
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
console.log(' \n ==> Exemplo 02 - String Enums  \n');
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
})(Dia || (Dia = {}));
console.log(Dia.Segunda);
console.log(' \n ==> Exemplo 03 -  Como podemos acessar um valor de um Enum com uma chave: (usando a const) \n');
const comidaF = (c) => {
    return `${c} é uma comida muito boa!!`;
};
console.log(comidaF("Churrasco"));
console.log(' \n==> Exemplo 04 -  Quando usar Enum !!  \n');
var Task;
(function (Task) {
    Task["Todo"] = "Todo";
    Task["Progress"] = "Progress";
    Task["Done"] = "Done";
})(Task || (Task = {}));
const doneTask = {
    id: 1,
    status: Task.Done,
    descrição: "SPD!!"
};
if (doneTask.status === Task.Done) {
    console.log(`Tarefa ${doneTask.descrição} finalizado com Sucesso `);
}
