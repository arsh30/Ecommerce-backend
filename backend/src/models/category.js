const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {  //slug is basically unique category we can not repeat anything
        type: String,
        required: true,
        unique: true
    },
    parentId: {  //here we store the parent Id eg if we create categories like electronic it is excell parent category,so we dont need to create parent id for electronic
        type: String,  //eg men, women are parent category they are already parent
        // eg2 mobile is category, we have to specify the parent of mobile ie electronic, so in this parent Id ie electronic will be stored

    }
}, { timestamps: true });

module.exports = mongoose.model('categorySchema', categorySchema);