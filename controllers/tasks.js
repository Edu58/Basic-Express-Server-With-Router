const getAllTasks = (req, res) => {
    res.send('all the tasks available')
}

const getOneTask = (req, res) => {
    res.send('one task')
}


module.exports = {
    getAllTasks,
    getOneTask
}