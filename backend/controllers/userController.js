const User = require('../models/UserModel');

exports.getAllUsers = (req, res) => 
{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};

exports.getUser = (req, res) => 
{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};

exports.createUser = (req, res) => 
{
    const user = new User(
        {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        },
    );
    user.save()
        .then(data => 
        {
            res.json(data);
        })
        .catch(err => 
        {
            res.json({ message : err }); 
        });
    console.log(req.body);
};

exports.updateUser = (req, res) => 
{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};

exports.deleteUser = (req, res) => 
{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};
