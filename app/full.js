var express = require('express');
var router = express.Router();
var gplay = require('google-play-scraper');
/* GET home page. */
router.get('/:appId/:country/:lang', function (req, res, next) {
    try {
        var appId = req.params.appId
        var lang = req.params.lang
        var country = req.params.country
        lang === "" ? lang = 'en' : lang = lang;
        gplay.app({
            appId: appId,
            lang: lang,
            country:country
        }).then(function (data) {
            res.json(data)
        }, console.log);
    } catch (error) {
        res.send(error.message)
    }
  
});
module.exports = router;

