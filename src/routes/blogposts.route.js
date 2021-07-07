
module.exports = app => {

    const router = require('express').Router();

    const controller = require("../controllers/controller");

    //getting all blogposts
    router.get('/', controller.findAll);

    //get all blogposts by ID:
    router.get('/:id', function (req, res) {
        res.send('now you reached the router for student by ID')
    })
    
    app.use('/api/blogposts', router);
}