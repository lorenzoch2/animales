const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevoAnimal = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  }
  const animales = fs.readFileSync('citas.json', 'utf8')
  const animalesJSON = JSON.parse(animales)
  animalesJSON.push(nuevoAnimal)
  const data = JSON.stringify(animalesJSON, null, 2)
  fs.writeFileSync('citas.json', data)
}

const leer = () => {
  const animales = fs.readFileSync('citas.json', 'utf8')
  const animalesJSON = JSON.parse(animales)
  animalesJSON.forEach(
    animal => {
      console.log(animal)
    }
  )
}

module.exports = { registrar, leer };