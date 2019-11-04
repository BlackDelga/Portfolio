/*jshint esversion: 6 */

// //seting up my data.json as a localfile
// const fs = require('fs');
// const data  = fs.readFileSync('data.json');
// const word = JSON.parse(data);

//requered express in my project
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');
const projects = data.projects;

app.set('view engine', 'pug');

app.use('/cssFiles', express.static('Public'));

app.get('/', function (req, resp) {
  resp.render('index', { projects, });
});

app.get('/contact.html', function (req, resp) {
  resp.sendFile('contact.html', { root: path.join(__dirname, './Files') });
});

app.get('/about.html', function (req, resp) {
  resp.sendFile('about.html', { root: path.join(__dirname, './Files') });
});

app.get('/index.html', function (req, resp) {
  resp.render('index', { projects, });
});

app.get('/project', function (req, resp) {
  resp.redirect('project/0');
});

//renders each project page based on pug template
app.get('/project/:id', (req, res, next) => {
  const {
    id,
  } = req.params;
  if ((id >= 0 && id <= 4) && isNaN(id) === false) {
    const project = projects[id];
    res.render('project', {
      project,
      id,
    });
  } else {
    next();
  }
});

// Creating new error
app.use((req, res, next) => {
  const err = new Error('There has been an error!');
  err.status = 404;
  next(err);
});

//using that error to display error pug template
app.use((err, req, res, next) => {
  res.status(err.status);
  err.message = 'There has been an error';
  res.locals.error = err;
  if (res.status = 404) {
    console.log(`${req.path} is not a valid path`);
  }

  res.render('error');
});

app.listen(3000, function () {
  console.log('port at 3000');
});

// //when click at MyApp this message appers
// $('#app').click(function () {
//   alert('Not Avalable At This Time Sorry!');
// });
