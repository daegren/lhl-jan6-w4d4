const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(sassMiddleware({
  src: path.join(__dirname, 'styles'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'expanded',
  prefix: '/public'
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log("Application is listening on http://localhost:8080");
});
