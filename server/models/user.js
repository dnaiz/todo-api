const mongoose = require('mongoose');
const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        minLength:5
    },
    age:{
        type:Number,
        required:true
    }
});

module.exports = {User};