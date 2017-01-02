//npm imports
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

//local imports

const connection = require('./config');
const router = require('./router.js');

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', function() {
  // Wait for the database connection to establish, then start the app.
  const app = koa();
  app.use(bodyParser());
  app.use(cors());

  app.use(router.routes());
  app.listen(8008);
  console.log('Koa listening on port 8008');


});
