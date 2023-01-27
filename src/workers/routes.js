const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getWorkers);
router.post("/", controller.addWorker);
router.get("/:id", controller.getWorkersById);
router.put("/:id", controller.updateWorker);
router.delete("/:id", controller.removeWorker);


module.exports = router;
