const mongoose = require('mongoose');
const schema = mongoose.schema;

const itemSchema = new schema({
    iID :{
        type: String,
        required:true
    },
    iName :{
        type: String,
        required:true
    },
    available :{
        type: Boolean,
        required:true
    },
    nOfItems :{
        type: Number,
        required:true
    }
})

const Item = mongoose.model("Item",itemSchema);
module.exports = Item;