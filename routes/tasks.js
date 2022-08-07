const express = require('express')
const router = express.Router()

const { getAllTasks, getOneTask } = require('../controllers/tasks')

router.route('/tasks').get(getAllTasks)
router.route('/task').get(getOneTask)

module.exports = router