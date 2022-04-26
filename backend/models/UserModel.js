const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true  
        },
        surname : {
            type : String,
            required : true
        },
        date : {
            type : String,
            default : Date.now
        }        
    }
);

module.exports = mongoose.model('Users', userSchema);
