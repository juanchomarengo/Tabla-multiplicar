# Notas: 
Aplicacion creada en el marco de una practica de Node.js

## Descripcion:
Aplicacion de consola donde uno le puede indicar la base para crear su tabla y hasta que numero quiere que sea.
Tambien se crea un archivo de texto en el directorio ` ./salida `

## Como ejecutar la app:

Para correr la app debe clonar el repositorio en su escritorio o donde usted crea correcto. Luego debemos abrir una terminal en la carpeta de la app y correr el comando ```npm i``` para que se instalen todas las dependecias necesarias para que la aplicacion funcione. 
Una vez hecho lo mencionado anteriormente ya puede ejecutar comandos como el que se muestras a continuacion.

## Ejemplo de comando y salida:

```
Entrada --> node app -b 5 -l -h 7

Salida --> 
            ===============
            Tabla del 5
            ===============
            5 x 1 = 5
            5 x 2 = 10
            5 x 3 = 15
            5 x 4 = 20
            5 x 5 = 25
            5 x 6 = 30
            5 x 7 = 35

            table-5.txt creado

```

## Comandos
```
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la base de la tabla de multiplicar       [number] [required]
  -l, --listar   Muestra la tabla en consola          [boolean] [default: false]
  -h, --hasta    Indica hasta que numbero se multiplica con la base [number] [default: 10]
```


