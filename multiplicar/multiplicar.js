//requireds -> hay 3 tipos
const fs = require('fs'); // es una libreria que viene con node
//paquetes n o nativos de de node
//const fs = require('express');
//archivos que nosotros mismos escribimpos
// const fs = require('./');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {


    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor introducido ${limite} no es un numero`);
        return;
    }
    console.log('===================================='.green);
    console.log(`=========tabla de ${base}=================`.green);
    console.log('===================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }

}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        //usamos ./ para regresar a la raiz
        //usamos ../ para regresart a un directorio anterior

        fs.writeFile(`tablas/tabla-${base}-limit-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-limit-${limite}.txt`.red);
        });

    });
}

//otra forma de agregar el modelu.exsports
// modelu.exports.crearArchivo = (base) => { ....


module.exports = {
    crearArchivo,
    listarTabla
}