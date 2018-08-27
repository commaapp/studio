var gplay = require('google-play-scraper');
try {
    var category =  'TOOLS'
    var collection = 'topselling_free'
    var gl ='vn'
    gplay.list({
        category: category,
        collection: collection,
        num: 120,
        country: gl
    }).then(function (data) {
        console.log(data)
    }, console.log);
} catch (error) {
    console.log(error.message)
    throw(error)
}