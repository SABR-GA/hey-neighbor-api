const mongoose = require('./../db/connection');
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    Name: String,
    Date: Date,
    Comment: String,
    Vote: Number

})

module.exports=mongoose.model('Comment', commentSchema)