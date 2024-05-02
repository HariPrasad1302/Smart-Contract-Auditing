const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model')
const Auditor = require('./auditor.model')

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    projectCategory: {
        type: String,
        enum: ['Smart Contract', 'Defi', 'NFT', 'ERC20']
    },
    projectURL: {
        type: String
    },
    projectLogo: {
        type: String // Assuming logo is a URL to an image
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: User,
    },
    quotes: [{
        auditor: {
            type: Schema.Types.ObjectId,
            ref: Auditor,
            required: true
        },
        quoteAmount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Accepted', 'Rejected'],
            default: 'Pending'
        }
    }]
});

module.exports = mongoose.model("Project", projectSchema);
