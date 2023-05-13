// Importación de funciones
const { registrar, leer } = require('./operaciones')

// Obtener los argumentos que se pasan en la línea de comandos
const [ operacion, nombre, edad, animal, color, enfermedad ] = process.argv.slice(2)

// Ejecutar la operación que llama a una de las dos funciones importadas
if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
} else if(operacion === "leer"){
    leer()
} else {
    console.log('Operación inválida')
}
