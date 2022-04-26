const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true  
        },
        name : {
            type : String,
            required : true
        },
        password : {
            type: String,
            required : true
        },
        date : {
            type : String,
            default : Date.now
        }        
    }
);

module.exports = mongoose.model('Users', userSchema);
