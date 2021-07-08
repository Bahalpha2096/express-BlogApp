const { Router } = require('express');
const express = require(`express`);

const app = express();

app.get(`/`, function(req, res) {
    res.send(`blogposts.route`)
})


require('./src/routes/blogposts.route')(app);
require('./src/routes/users.route')(app);

app.listen(3000, function() {
    console.log(`lsitening on port 3000`)

})