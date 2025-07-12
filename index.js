const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('form');
});


app.post('/submit', (req, res) => {
  const { name, email, age, comments } = req.body;
  res.render('success', { name, email, age, comments });
});


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
