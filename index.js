const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Hello world!');
});
const server = http.listern(5000, function(){
  console.lof('listening on *:5000');
});
