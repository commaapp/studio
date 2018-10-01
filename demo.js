var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const NodeID3 = require('node-id3')
// try {
var result = [];
fs.readdirSync(__dirname + '/public/o2o').forEach(file => {
    file = __dirname + "/public/o2o/" + file
    let tags = NodeID3.read(file)
 
    NodeID3.read(file, function (err, tags) {
        console.log(file);

        result.push({
            title: tags.title,
            artist: tags.artist,
            url: path.basename(file),
        })

    })
});
console.log({re:result});
