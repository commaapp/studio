var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
router.get('/', function (req, res, next) {

    try {
        var result = {
            image: '',
            name: '',
            source: '',
            type: '',
        }
        result = []
        console.log(__dirname + '/public/callcolor/images');
        fs.readdirSync(__dirname + '/public/callcolor/images').forEach(file => {
            // console.log(path.basename(file));
            // console.log(path.extname(file));
            // console.log(path.basename(file,'.mp4'));
            // console.log(path.basename(file).split('.').slice(0, -1).join('.'));
            console.log(fs.readdirSync(__dirname + '/public/callcolor/images').length);

            var nameFile = path.basename(file).split('.').slice(0, -1).join('.');
            if (fs.existsSync(__dirname + '/public/callcolor/sources/' + nameFile + '.png')) {

                console.log(nameFile + '.png')
                result.push({
                    image: 'http://103.27.237.93/callcolor/images/' + nameFile + '.png',
                    name: nameFile,
                    source: 'http://103.27.237.93/callcolor/sources/' + nameFile + '.png',
                    type: 'image',
                })
            } else {
                result.push({
                    image: 'http://103.27.237.93/callcolor/images/' + nameFile + '.png',
                    name: nameFile,
                    source: 'http://103.27.237.93/callcolor/sources/' + nameFile + '.mp4',
                    type: 'video',
                })
                console.log(nameFile + '.mp4')
            }
        })


        var json = {
            error: false,
            count: result.length,
            errors: [],
            messages: '',
            results: result,
        }
        res.json(json)
    } catch (error) {

        var request = require("request")

        var url = 'http://data.crazymz.com/colorphone/api_v2.php'

        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                res.json(body) // Print the json response
            }
        })
        // res.json({
        //     error: true,
        //     errors: [error.messages],
        //     messages: '',
        //     results: [],
        // })
    }

});
module.exports = router;

