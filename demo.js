var request = require("request")

var url = 'http://data.crazymz.com/colorphone/api_v2.php'

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})