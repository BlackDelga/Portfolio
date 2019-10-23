/*jshint esversion: 6 */

// //seting up my data.json as a localfile
// const fs = require('fs');
// const data  = fs.readFileSync('data.json');
// const word = JSON.parse(data);

//requered express in my project
const express = require('express');
const app = express();
const path = require('path');
const { projects }  = require('./data.json');
console.log(projects);

app.set('view engine', 'pug');

app.use('/cssFiles', express.static('Public'));

app.get('/', function (req, resp) {
  resp.render('index', { projects });
});

app.get('/contact.html', function (req, resp) {
  resp.sendFile('contact.html', { root: path.join(__dirname, './Files') });
});

app.get('/about.html', function (req, resp) {
  resp.sendFile('about.html', { root: path.join(__dirname, './Files') });
});

app.get('/index.html', function (req, resp) {
  resp.render('index', { projects });
});

app.get('/project.html', function (req, resp) {
  resp.render('project', { projects });
});

app.listen(3000, function () {
  console.log('port at 3000');
});

// //when click at MyApp this message appers
// $('#app').click(function () {
//   alert('Not Avalable At This Time Sorry!');
// });
