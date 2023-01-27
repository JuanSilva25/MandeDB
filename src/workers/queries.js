const getWorkers = "SELECT * FROM workers";
const getWorkersById = "SELECT * FROM workers WHERE id = $1";
const checkEmailExists =  "SELECT w FROM workers w WHERE w.email = $1";
const addWorker = "INSERT INTO workers (name, email) VALUES ($1, $2)";
const removeWorker = "DELETE FROM workers WHERE id = $1";
const updateWorker = "UPDATE workers SET name = $1 WHERE id = $2";

module.exports = {
    getWorkers,
    getWorkersById,
    checkEmailExists,
    addWorker,
    removeWorker,
    updateWorker,
};