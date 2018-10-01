var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const NodeID3 = require('node-id3')
router.get('/', function (req, res, next) {
  try {
    var result = [];
    fs.readdirSync('./public/o2o/').forEach(file => {
      file = "./public/o2o/" + file
      console.log(file);
      let tags = NodeID3.read(file)

      function AnticipatedSyncFunction() {
        var data;
        NodeID3.read(file, function (err, tags) {
          data = {
            title: tags.title,
            artist: tags.artist,
            url: '/o2o/' + path.basename(file),
          }
        })
        while (data === undefined) {
          require('deasync').runLoopOnce();
        }
        return data;
      }
      result.push(AnticipatedSyncFunction())

    });
    res.json(result)
  } catch (error) {
    res.json({
      error: true,
      messages: error,
      results: [],
    })
  }

});
module.exports = router;

