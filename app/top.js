var express = require('express');
var router = express.Router();
var gplay = require('google-play-scraper');
/* GET home page. */
router.get('/:category/:collection/:gl', function (req, res, next) {
    try {
        var category = req.params.category
        var collection = req.params.collection
        var gl = req.params.gl
        gplay.list({
            category: category,
            collection: collection,
            num: 120,
            fullDetail: false,
            country: gl
        }).then(function (data) {
            res.json(data)
        }, function (data) {
            res.json(data)
        });
    } catch (error) {
        res.json(error.message)
        throw(error)
    }
});
module.exports = router;
