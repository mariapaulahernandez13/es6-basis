const estudiantes1 = [
    "Juan Diego",
    "Juan Camilo",
    "Laura",
    "Nicolas"
];

const estudiantes2 = [
    "Enrique",
    "Michael",
    "Daniela",
    "Julian"
];

const estudiantes3 = [
    'Veronica',
    ...estudiantes1,
    'Paula',
    ...estudiantes2
];

//console.log( estudiantes1[2] )

//desestructuración arreglo:
let [
    JD,
    JC,
    LA,
    NI
] = estudiantes1

let colors = require('colors');

//console.log(JD.rainbow, JC.red.underline, LA, NI)

console.log(estudiantes3)
//Operador spread(resto)
