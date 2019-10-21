/*jshint esversion: 6 */

const express = require('express');
const app = express();
const path = require('path');

app.use('/cssFiles', express.static('Public'));

app.get('/', function (req, resp) {
  resp.sendFile('index.html', { root: path.join(__dirname, './Files') });
});

app.get('/contact.html', function (req, resp) {
  resp.sendFile('contact.html', { root: path.join(__dirname, './Files') });
});

app.get('/about.html', function (req, resp) {
  resp.sendFile('about.html', { root: path.join(__dirname, './Files') });
});

app.get('/index.html', function (req, resp) {
  resp.sendFile('index.html', { root: path.join(__dirname, './Files') });
});

app.get('/project.html', function (req, resp) {
  resp.sendFile('project.html', { root: path.join(__dirname, './Files') });
});

app.listen(3000, function () {
  console.log('port at 3000');
});

// //when click at MyApp this message appers
// $('#app').click(function () {
//   alert('Not Avalable At This Time Sorry!');
// });
