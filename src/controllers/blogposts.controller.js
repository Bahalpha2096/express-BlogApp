const axios = require('axios');

exports.findAll = (req, res) => {
    //call the jsonplacholder API
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(apicall => {
            res.send(apicall.data)
        })
}

exports.findById = (req, res) => {
    //call the jsonplaceholder API
    axios.get('https://jsonplaceholder.typicode.com/posts/' + req.params.id)
        .then(apicall => {
            res.send(apicall.data)
        })
}