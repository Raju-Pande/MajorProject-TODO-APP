const TASK = require("../models/Task_ToDO");

module.exports.createTask = (req, res) => {
    console.log(req.body, 'new task');

    TASK.create({
        description: req.body.description,
        category: req.body.category,
        datetime: req.body.datetime,
        checked: false
    })
        .then(list => {
            console.log(list);
        })
        .catch(err => {
            console.log("Error creating task:", err);
        });
    return res.redirect("back");
};