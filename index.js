const Koa = require('koa');
const app = new Koa();
const mainRouter = require('./routes/index');
const Author = require('./models/author');
const faker = require('faker');

app.use(mainRouter);

app.listen(3000, () => console.log('Server running on https://localhost:3000'));