const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5,listar,hasta = 10) =>{ 
    try{
        console.clear();
        
        
        
        let salida = "";
        let consola = "";
        
    
        for (let i = 1; i <=hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        
        if(listar){
            console.log("===============".rainbow)
            console.log(`Tabla del ${base}`.underline.green)
            console.log("===============".rainbow)
            console.log(consola)
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        return `table-${base}.txt`;
    }catch (err){
        throw err;
    }
       
}

module.exports = {
    crearArchivo}