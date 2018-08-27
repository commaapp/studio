var express = require('express');
var router = express.Router();
var gplay = require('google-play-scraper');
/* GET home page. */
router.get('/:key/:gl', function (req, res, next) {
    try {
        var key = req.params.key
        var gl = req.params.gl
        gplay.search({
            term: key,
            num: 250,
            fullDetail: false,
            country: gl,
            throttle: 10
        }).then(function (data) {
            res.json(data)
        }, console.log);
    } catch (error) {
        res.send(error.message)
    }
 
});
module.exports = router;
