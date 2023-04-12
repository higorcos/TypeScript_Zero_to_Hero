"use strict";
{
}
function error(message) {
    throw new Error(message);
}
const rejectMessage = () => {
    return error('MSG PROP.02');
};
const loopInfinito = () => {
    while (true) {
        console.log('oi,Develop');
    }
};
const algumaCoisaNull = null;
console.log(algumaCoisaNull);
