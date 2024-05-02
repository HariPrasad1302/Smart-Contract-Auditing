const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auditorSchema = new Schema({
    name: {
        type: String,
    },
    description:{
        type: String,
    },
    yearOfExperience:{
        type: String
    },
    emailID:{
        type: String,
    },
    password:{
        type: String,
    },
    referenceURLs: [{ 
        type: String 
    }],
    createdOn:{
        type:Date,
        default: new Date().getTime(),
    }
});

module.exports = mongoose.model("Auditor", auditorSchema);