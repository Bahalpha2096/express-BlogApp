
module.exports = app => {
    const controller = require('../controllers/users.controller');

    const router = require('express').Router;

    //get all users
    router.get('/', controller.findAll);

    //get a user by ID
    router.get('/:id', controller.findById);


    app.use('/api/users', router);


};