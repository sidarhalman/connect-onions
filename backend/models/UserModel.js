const mongoose = require('mongoose');
const { object } = require('yup');

const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique: true 
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
        },
        items: {
            type: Array,
            default: []
        }
    }
);

module.exports = mongoose.model('Users', userSchema);
