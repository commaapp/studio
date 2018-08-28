const fs = require('fs');
const path = require('path');


fs.readdirSync('./public/callcolor/images').forEach(file => {
    // console.log(path.basename(file));
    // console.log(path.extname(file));
    // console.log(path.basename(file,'.mp4'));
    // console.log(path.basename(file).split('.').slice(0, -1).join('.'));
  console.log(  fs.readdirSync('./public/callcolor/images').length);
  
    var nameFile=path.basename(file).split('.').slice(0, -1).join('.');
    if (fs.existsSync('./public/callcolor/sources/'+nameFile+'.png')) {
        console.log(nameFile+'.png')
    }else{
        console.log(nameFile+'.mp4')
    }


  })