const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/cookbooks_db', { useNewUrlParser: true })

mongoose.Promise = Promise
let mongoURL = ""

if (process.env.NODE_ENV === "production") {
  mongoURL = process.env.DB_URL;
} else {
  mongoURL = "mongodb://localhost/hey-neighbor"; // match current mongodb for localhost
}

mongoose.connect(mongoURL)
module.exports = mongoose
