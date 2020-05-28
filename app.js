// una forma de requerir la funcion
// const multiplicar = require('./multiplicar/multiplicar.js');
// si la declaramos de esa forma la temdriamos que usar asi
// multiplicar.crearArchivo()...


//pero si usamos la destructuracion, sería asi

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch((err) => console.log(err));

        break;

    default:
        console.log('Comando no reconocido');

}




// console.log(argv);
// let base = '7';

// let argv2 = process.argv;
// let parametro = argv[2];
// //el split separa un cadena en texto en un arreglo, el separador es el que se especifica 
// let base = parametro.split('=')[1];



/**
 * subir los archivos al repositorio git
 * ejecutar comando GIT INIT
 * ejecutar comando GIT STATUS
 * quitar los archivos que no queremos subir
 * creamos el archivo .gitignore y alli escribimos que archivo no qureemos subir
 * 
 */









//en el .json se crean todas las dependecias de nuestra aplicacion
//osea todas la librerias que necesita nuestra aplicacion para que puedad correr