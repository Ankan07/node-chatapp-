var socket=io();

//this variable is require to listen and send data from the browser
socket.on('connect',function () {
  console.log('connected to server');


//
//   socket.emit('createEmail',{
//     to:'j@example.com',
// text:'Hey this is Ankan'
//
// });
//
// socket.emit('createMessage',{
// from:'Ankan',
// text:'Yup'
//
//
// })



});
socket.on('disconnect',function () {console.log("Disconnected from server");});

socket.on('newMessage',function(message){

  console.log('newMessage',message);
});

// socket.on('newEmail',function(email){
//
//   console.log('New Email',email);
// });
