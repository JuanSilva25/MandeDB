const pool = require('../../db');
const queries = require('./queries');

const getWorkers = (req,res) =>{
    pool.query(queries.getWorkers, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getWorkersById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getWorkersById, [id], (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addWorker = (req,res) =>{
    const { name, email} = req.body;
    //revisa si el email existe
    pool.query(queries.checkEmailExists, [email], (error, results )=>{
        if (results.rows.length) { 
            res.send("El email ya esta registrado.");
        }
        //añade un trabajador a la bd
        pool.query(queries.addWorker, [name, email], (error, results) =>{
            if (error) throw error;
            res.status(201).send("Trabajador creado exitosamente.");
        });
    });

};

const removeWorker = (req,res) =>{
    const id = parseInt(req.params.id);

    pool.query(queries.removeWorkerById, [id], (error,results)=>{
        const noWorkerFound = !results.rows.length;
        if (noWorkerFound){
            res.send("El trabajador no se encuentra registrado.");
        }   
        
        pool.query(queries.removeWorker, [id], (error,results)=>{
            if (errpr) throw error;
            res.status(200).send("El trabajador fue eliminado exitosamente.");
        });
    });
};

const updateWorker = (req,res) =>{
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getWorkersById, [id], (error, results)=>{
        const noWorkerFound = !results.rows.length;
        if (noWorkerFound){
            res.send("El trabajador no se encuentra registrado");
        }
        pool.query(queries.updateWorker, [name,id], (error, results)=>{
            if (error) throw error;
            res.status(200).send("El trabajador fue actualizado correctamente");
        });
    });
}

module.exports = {
    getWorkers,
    getWorkersById,
    addWorker,
    removeWorker,
    updateWorker,
}