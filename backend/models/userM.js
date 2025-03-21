const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    uID : {
        type: String,
        requred: true
    },
    uName :{
        type: String,
        reqired:true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        reqired: true,
        default: false 
    }
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema);