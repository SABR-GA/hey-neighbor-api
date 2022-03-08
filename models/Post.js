const mongoose = require('./../db/connection');
const Schema = mongoose.Schema

const postSchema = new Schema ({
    Title: String,
    Date: Date.now,
    Price: Number,
    Location: String,
    Description: String,
    Comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})

module.exports=mongoose.model('Post', postSchema)