

exports.findAll = (req, res) => {
    res.send( "You have reached the controller method for get all blog posts.");

}

exports.findById = (req, res) => {
    res.send( `You have reached the controller method for get all blog posts of ${req.params.id}:`);

}