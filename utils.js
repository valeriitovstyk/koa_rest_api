const db = require('./config/database');
const Author = require('./models/author');
const Post = require('./models/post');
const Comment = require('./models/comment');
const faker = require('faker');
const models = require('./models/index')

db.sync()
    .then(() => console.log('Nice! Database looks fine'))
    .catch(err => console.log(err, "Something went wrong with the Database Update!"));

for (let i = 0; i < 16; i++) {
    const newUser = Author.create({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password()});

    const newPost = Post.create({
        title: faker.lorem.word(),
        content: faker.lorem.sentence()
    })

    const newComment = Comment.create({
        text: faker.lorem.sentence()
    })
}