const Post = require('./../models/Post')
const Comment = require('./../models/Comment')


// Possible get location by IP address

// src: https://www.w3schools.com/html/html5_geolocation.asp

// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }


Post.find({}).remove(() => {
    Comment.find({}).remove(() => {
      let wrenches = Post.create({
        Title: 'Bunches of Wrenches',
        Date: Date.now,
        Price: 12,
        Location: 'Chicago',
        Description: 'I have a good deal of wrenches, in various sizes, that I dont get a lot of use out of. If you need them Ive got em!'
      }).then(Post => {
        Promise.all([
          Comment.create({
            Name: 'Anthony',
            Date: Date.now,
            Comment: 'I need Wrenches! My number is xxx-xxx-xxxx, please reach out!',
            vote: 3
          }).then(Comment => {
            Post.Comments.push(Comment)
          }),
          Comment.create({
            Name: 'John',
            Date: Date.now,
            Comment: 'This is great, my neighborhood could use more wrenches for some projects!',
            vote: 6
          }).then(Comment => {
            Post.Comments.push(Comment)
          })
        ]).then(() => {
          Post.save()
        })
      })
      let bicycles = Post.create({
        Title: 'Bikes for rent',
        Date: Date.now,
        Price: 15,
        Location: 'Ann Arbor',
        Description: 'Bunch of bikes for daily rent to explore the city, we also have helmets, knee pads and training wheels!'
      }).then(Post => {
        Promise.all([
          Comment.create({
            Name: 'Jim',
            Date: Date.now,
            Comment: 'I have a tour group coming through town in a few weeks, what is the max number of bikes we can rent?',
            vote: 1
          }).then(Comment => {
            Post.Comments.push(Comment)
          }),
          Comment.create({
            Name: 'Kim',
            Date: Date.now,
            Comment: 'Great prices! My friends and I rent every weekend to check out the parks and festivals, 10/10 would recommend! ',
            vote: 10
          }).then(Comment => {
            Post.Comments.push(Comment)
          })
        ]).then(() => {
          Post.save()
        })
      })
      let studioSpace = Post.create({
        Title: 'Open concept studio available',
        Date: Date.now,
        Price: 500,
        Location: 'Bay Area',
        Description: 'Spacious and affordable studios for photography or other art/space needs. Built in industrial sink and great natural lighting!'
      }).then(Post => {
        Promise.all([
          Comment.create({
            Name: 'Samantha',
            Date: Date.now,
            Comment: 'My daughter needs a practice space for trombone, this is perfect!',
            vote: 1
          }).then(Comment => {
            Post.Comments.push(Comment)
          }),
          Comment.create({
            Name: 'Mark',
            Date: Date.now,
            Comment: 'Is the price negotiable? This looks perfect for painting!',
            vote: 8
          }).then(Comment => {
            Post.Comments.push(Comment)
          }),
          Comment.create({
            Name: 'Hunter',
            Date: Date.now,
            Comment: 'Are there industrial plug-ins for larger equipment? I make t-shirts using washing machines and would love this space for my work!',
            vote: 2
          }).then(Comment => {
            Post.Comments.push(Comment)
          })
        ]).then(() => {
          Post.save()
        })
      })
    })
  }).then(console.log('seed added'))