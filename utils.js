const db = require('./config/database');
const Author = require('./models/user');
const Post = require('./models/post');
const faker = require('faker');

db.sync()
    .then(() => console.log('Nice! Database looks fine'))
    .catch(err => console.log(err, "Something went wrong with the Database Update!"));

for (let i = 0; i < 6; i++) {
    const newUser = Author.create({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password()});

    const newPost = Post.create({
        title: faker.lorem.word(),
        content: faker.lorem.sentence()
    })
}