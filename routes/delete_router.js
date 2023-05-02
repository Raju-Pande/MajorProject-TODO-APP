// console.log("inside routes/deleteTask");
const express = require('express');

const router = express.Router();

router.post('/delete-task', require('../controllers/delete_controllers').deleteTasks);

module.exports = router;