// const argv = require("yargs").argv;
const {argv} = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors 	= require('colors');
// console.log(argv);
let comando = argv._[0];
// console.log(comando);

switch (comando) {
	case 'listar':
			console.log('Listar las tareas');
			let listado = porHacer.listado();
			console.log(listado);
			listado.forEach((tarea,index) => {
				// console.log(`index: ${index}`, element);
				console.log('===========Por hacer============='.green);
				console.log(`Tarea: ${tarea.descripcion}`);
				console.log(`Completado: ${tarea.completado}`);
				console.log('================================='.green);
			});
		break;
	case 'crear':
			console.log('Crear una nueva tarea');
			let tarea = porHacer.crear(argv.descripcion);
			console.log(tarea);
			porHacer.insertarData('./db/db.json',tarea)
			.then(msg=>{console.log(msg);})
			.catch(e=>{console.log(e);});
		break;
	case 'actualizar':
			console.log('Actualizar estado de una tarea');
			let actualizar = porHacer.actualizar(argv.descripcion,argv.completado);
			console.log('Estado: '+actualizar);
		break;
	case 'borrar':
			console.log('Borrar una tarea');
			let borrado = porHacer.borrar(argv.descripcion);
			console.log("Estado: "+borrado);
		break;
	default:
			console.log('Comando no reconocido');
		break;
}
