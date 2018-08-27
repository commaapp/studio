var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    try {
        var results={
            image:'',
            name:'',
            source:'',
            type:'',
        }
        var json={
            error:'',
            count:'',
            errors:[],
            messages:'',
            results:[],
        }

    } catch (error) {
        res.send(error.message)
    }
  
});
module.exports = router;

