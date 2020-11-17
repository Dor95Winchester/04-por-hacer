const fs = require("fs");
let listarPorHacer = [];

const cargarJSON = (file)=>{
        try {
            listarPorHacer = require('../db/db.json');        
        } catch (error) {
            listarPorHacer = [];
        }
        return true;
};
const listado = ()=>{
    cargarJSON();
    return listarPorHacer;
};

const insertarData = (file ='./db/db.json',data)=>{
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(data), (err) => {
            if (err) return reject(err);
            return resolve('gravado!');
        });
    });
};

const crear = (descripcion)=>{
    cargarJSON();
    let porHacer = {
        descripcion
        ,completado: false
    }
    listarPorHacer.push(porHacer);
    return listarPorHacer; 
};

const actualizar = (descripcion,completado = true)=>{
    cargarJSON();
    let buscar = listarPorHacer.findIndex(tarea => tarea.descripcion === descripcion );
    console.log('buscar',buscar);
    if(buscar>=0){
        if(completado==='false')
        completado = false;
        listarPorHacer[buscar].completado = completado;
        console.log(listarPorHacer);
        insertarData(undefined,listarPorHacer);
        return true;
    }
    return false;
};
const borrar = (descripcion)=>{
    cargarJSON();
    let newData = listarPorHacer.filter(tarea=>tarea.descripcion!==descripcion);
    console.log(newData);
    if(listarPorHacer.length=== newData.length)
        return false;
    insertarData(undefined, newData);
    return true;
   
   
};
module.exports={
    crear
    ,insertarData
    , listado
    ,actualizar
    ,borrar
};