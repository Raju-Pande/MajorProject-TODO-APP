const TASK = require('../models/Task_ToDO')


module.exports.deleteTasks = (req, res) => {

    let obj = req.body;
    console.log(obj);

    for (let key in obj) {

        TASK.findByIdAndDelete(key).catch(err => {
            console.log('error is deleting an object form db:', err);
            return;
        })
    }

    return res.redirect("back");
};