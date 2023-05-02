// console.log("inside routes/createTask");

const express = require("express");

const router = express.Router();

router.post('/create-task', require('../controllers/task_controllers').createTask)

// router.get('/',task_controllers.createTask)


module.exports = router;