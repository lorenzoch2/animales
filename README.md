# Veterinaria

Desafío n°1 módulo Backend con Node y Express

En este código se implementa un programa que permite registrar y leer información de citas de una veterinaria en una archivo JSON usando Node.js y el módulo fs (File System).

# Requerimientos

## 1. Ejecutar scripts con Node Js desde la terminal.

Para este requerimiento, creamos un index.js con un código que nos permite interactuar con la terminal. Entramos a la terminal y utilizamos el comando 'node index.js' seguido de "registrar" o "leer". En el primer caso, seguiremos con los 5 datos necesarios para ser ingresados en citas.json. Esto permite que, desde la terminal, registremos datos.

## 2. Crear archivos con el módulo File System.

Con la función "regitrar" del archivo 'operaciones.js' se ingresan los datos tomados desde la terminal con el comando fs.writeFileSync y se sobrescriben en el archivo 'citas.json' como objeto js.

## 3. Leer archivos con el módulo File System.

Con la función "leer" del archivo 'operaciones.js' se lee el archivo 'citas.json' y se guarda en un arreglo js. Luego, este se convierte en un objeto JSON que, finalmente, se muestra su contenido en la consola.

## 4. Importar y exportar módulos en Node Js.

El archivo index.js utiliza la sintaxis require('./operaciones') para importar las funciones registrar y leer del archivo operaciones.js y poder utilizarlas en el programa.

## 5. Utilizar argumentos escritos por línea de comandos.

En el archivo index.js, utilizamos la funcion process.argv para leer los argumentos ingresados en la línea de comandos y escoger qué operación se llevará a cabo, junto con los datos, de ser escogida la operación de registro.
