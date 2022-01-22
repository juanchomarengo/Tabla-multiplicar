const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear()
console.log(argv)



    crearArchivo(argv.b,argv.l,argv.h)
        .then (nombreArchivo => console.log(nombreArchivo, 'creado'.underline))
        .catch (err => console.log(err))

