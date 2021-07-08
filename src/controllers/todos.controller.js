const axios = require('axios');

exports.findAll = (req, res) => {
    //call the jsonplacholder API by todo
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(apicall => {
            res.send(apicall.data)
        })
}

exports.findById = (req, res) => {
    //call the jsonplaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos/id' + req.params.id)
        .then(apicall => {
            res.send(apicall.data)
        })
}