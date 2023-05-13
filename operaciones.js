// Importación de módulo 'fs' (File System) de Node.js
const fs = require("fs");

// Función que toma datos desde la terminal para agregar al archivo 'citas.json'
const registrar = (nombre, edad, animal, color, enfermedad) => {
  // Objeto que contiene propiedades de acuerdo a las variables que fueron pasadas como argumento
  const nuevoAnimal = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  }
  // Función para devolver datos de 'citas.json' como cadena de texto
  const animales = fs.readFileSync('citas.json', 'utf8')
  // Convertir la cadena de texto en un objeto js
  const animalesJSON = JSON.parse(animales)
  // Guardar nuevo animal en el archivo 'citas.json'
  animalesJSON.push(nuevoAnimal)
  // Convertir objeto nuevamente a cadena de texto
  const data = JSON.stringify(animalesJSON, null, 2)
  // Sobrescribir en el archivo 'citas.json' los nuevos datos
  fs.writeFileSync('citas.json', data)
}

// Función que lee datos de 'citas.json' y los muestra en la terminal
const leer = () => {
  // Función para devolver datos de 'citas.json' como cadena de texto
  const animales = fs.readFileSync('citas.json', 'utf8')
  // Convertir la cadena de texto en un objeto js
  const animalesJSON = JSON.parse(animales)
  // Imprimir datos en la terminal
  animalesJSON.forEach(
    animal => {
      console.log(animal)
    }
  )
}

// Exportar el objeto con las funciones registrar y leer
module.exports = { registrar, leer };