const descripcion = {
    demand: true
    , alias: 'd'
}
const completado = {
    default: true
    , alias: 'c'
};

const argv = require("yargs")
    .command('listar', 'Lista las tareas por hacer', {
    } )
    .command('crear', 'Crear una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .help();
module.exports={
    argv
};