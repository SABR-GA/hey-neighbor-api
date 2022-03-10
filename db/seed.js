const Comment = require("./../models/Comment.js");
const Post = require("./../models/Post.js");
Post.deleteMany().then(() => {

    let wrenches = Post.create({
      Title: 'Bunches of Wrenches',
      
      Price: 12,
      Location: 'Chicago',
      Description: 'I have a good deal of wrenches, in various sizes, that I dont get a lot of use out of. If you need them Ive got em!'
    }).then(Post => {
      Promise.all([
        Comment.create({
          Name: 'Anthony',
          
          Comment: 'I need Wrenches! My number is xxx-xxx-xxxx, please reach out!',
          Vote: 3
        }).then(Comment => {
          Post.Comments.push(Comment)
        }),
        Comment.create({
          Name: 'John',
          
          Comment: 'This is great, my neighborhood could use more wrenches for some projects!',
          Vote: 6
        }).then(Comment => {
          Post.Comments.push(Comment)
        })
      ]).then(() => {
        Post.save()
      })
    })
    let bicycles = Post.create({
      Title: 'Bikes for rent',
      
      Price: 15,
      Location: 'Ann Arbor',
      Description: 'Bunch of bikes for daily rent to explore the city, we also have helmets, knee pads and training wheels!'
    }).then(Post => {
      Promise.all([
        Comment.create({
          Name: 'Jim',
          
          Comment: 'I have a tour group coming through town in a few weeks, what is the max number of bikes we can rent?',
          Vote: 1
        }).then(Comment => {
          Post.Comments.push(Comment)
        }),
        Comment.create({
          Name: 'Kim',
          
          Comment: 'Great prices! My friends and I rent every weekend to check out the parks and festivals, 10/10 would recommend! ',
          Vote: 10
        }).then(Comment => {
          Post.Comments.push(Comment)
        })
      ]).then(() => {
        Post.save()
      })
    })
    let studioSpace = Post.create({
      Title: 'Open concept studio available',
      
      Price: 500,
      Location: 'Bay Area',
      Description: 'Spacious and affordable studios for photography or other art/space needs. Built in industrial sink and great natural lighting!'
    }).then(Post => {
      Promise.all([
        Comment.create({
          Name: 'Samantha',
          
          Comment: 'My daughter needs a practice space for trombone, this is perfect!',
          Vote: 1
        }).then(Comment => {
          Post.Comments.push(Comment)
        }),
        Comment.create({
          Name: 'Mark',
          
          Comment: 'Is the price negotiable? This looks perfect for painting!',
          Vote: 8
        }).then(Comment => {
          Post.Comments.push(Comment)
        }),
        Comment.create({
          Name: 'Hunter',
          
          Comment: 'Are there industrial plug-ins for larger equipment? I make t-shirts using washing machines and would love this space for my work!',
          Vote: 2
        }).then(Comment => {
          Post.Comments.push(Comment)
        })
      ]).then(() => {
        Post.save()
      })
    })
  
}).then(console.log('seed added')) 