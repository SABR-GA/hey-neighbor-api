const Post = require("./../models/Post");
const seedData = require("./seed.json");
Post.deleteMany({}).then(() => {
  Post.insertMany(seedData).then(() => {
    console.log("added data");

    process.exit();
  });
});
