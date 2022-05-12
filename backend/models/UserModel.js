const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : [ true, 'check the email' ],
            unique: true 
        },
        name : {
            type : String,
            required : [ true, 'check the name' ]
        },
        password : {
            type: String,
            required : [ true, 'check the password' ]
        },
        date : {
            type : String,
            default : Date.now
        },
        items: {
            type: Array,
            default: []
        }
    }
);

module.exports = mongoose.model('Users', userSchema);
