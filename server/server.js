//
// const path=require('path');
// const express=require('express');
// const publicPath=path.join(__dirname, '../public');
// //this is the path we wanna provide to the express static middleware
// var app=express();
//
// //to configure our express static middleware
// app.use(express.static(publicPath));
// // console.log(__dirname+'/../public');
// //
//  console.log(publicPath);
// app.listen(3000,()=>{
// console.log('Server is up');
//
// });
const socketIO=require('socket.io');
const path = require('path');
const express = require('express');
const http=require('http');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
//http
var server=http.createServer(app);
var io=socketIO.listen(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{
  console.log("New user connected");
  socket.on('disconnect',()=>{console.log("user was disconnected");});
});
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
