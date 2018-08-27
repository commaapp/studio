var express = require('express');
var router = express.Router();
var gplay = require('google-play-scraper');
/* GET home page. */
router.get('/:pk/:q/:gl', function (req, res, next) {
  try {
    var q = req.params.q
    var gl = req.params.gl
    var pk = req.params.pk
    gplay.search({
        term: q,
        num: 250,
        fullDetail: false,
        country: gl,
        throttle: 10
    }).then(function (data) {
        var index = '-';
        for (var i = 0; i < data.length; i++) {
            if (pk === data[i].appId) {
                index = (i + 1)
                break
            }
        }
        res.json({
            link: `https://play.google.com/store/search?c=apps&q=${q}&gl=${gl}`,
            index:index,
            q:q,
            gl:gl,
            pk:pk
        })
    }, console.log);
  } catch (error) {
    res.send(error.message)
  }
});
module.exports = router;
