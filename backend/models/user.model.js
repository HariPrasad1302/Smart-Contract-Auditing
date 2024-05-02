const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
    },
    description:{
        type: String,
    },
    companyName:{
        type: String
    },
    emailID:{
        type: String,
    },
    password:{
        type: String,
    },
    createdOn:{
        type:Date,
        default: new Date().getTime(),
    }
});

module.exports = mongoose.model("User", userSchema);