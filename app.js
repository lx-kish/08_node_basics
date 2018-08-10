const os = require('os');
const fs = require('fs');
const userData = require('./user.js');

console.log(userData);

let user = os.userInfo();
let date = new Date();

let message = `User "${user.username}" started this APP at ${date}`;

fs.appendFile("hello.txt", message,(err)=>{
    if(err){
        console.log('not able to append ' + err)
    }
})