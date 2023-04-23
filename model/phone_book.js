
// Import mongoose
const mongoose = require('mongoose');

const phone_bookSchema = new mongoose.Schema({
    Name:{
        type: String,
    required:true,
},
number: {
    type:integer,
    default:'Unknown'
}
},
{timestamps:true})

module.exports = mongoose.model('phone_book',phone_bookSchema);