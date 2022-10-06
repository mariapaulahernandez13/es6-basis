//Traer la dependecia del componente suma
import { restar, sumar} from './sumar.js'
import  materias from './materias.js'

//1. Recorrido de arreglo: forEach
materias.forEach((materia) => {
    if(materia.profesor === 'Cristian'){
        console.log(`materia: ${materia.name}`)
        console.log(`notas: ${materia.notas}`)
    }
});

//2. Convertir a un arreglo de profesores
//metodo map()
let profesores = materias.map(function(materia){
    return materia.profesor
})

//3. Agregar una materia al arreglo de materias
// push()
materias.push({
    id: 5,
    name: "Cultura física",
    profesor: "Luis Baquero",
    notas: [
        4.5,
        3.8
    ]
})

//4. Búsqueda en arreglos:
//find
const PHP = materias.find(function(materia){
    return materia.profesor === ''
})

console.log(PHP)

//Desestructuración:
//const { first_name, last_name, id } = estudiantes

//let variables
//let a = 10

//const: constantes
//const b = 29

/*console.log(`suma de a + b: ${ sumar(a, b)}`)
console.log(`resta de a + b: ${ restar(a, b)}`)*/

/*console.log(`Nombre estudiante: ${ first_name }`)
console.log(`Apellido estudiante: ${ last_name }`)
console.log(`Identificación estudiante: ${ id }`)*/