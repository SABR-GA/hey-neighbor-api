const mongoose = require('./../db/connection');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	Title: String,
	Date: Date,
	Price: Number,
	Location: String,
	Description: String,
	Comments: [ { ref: 'Comment', type: Schema.Types.ObjectId } ]
});

module.exports = mongoose.model('Post', postSchema);
