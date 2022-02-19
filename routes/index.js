var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "../views/index.html"))
})

router.get("/api/:date", function(req, res){
 
  var unix = req.params.date;
  console.log(req.params)
  if(/\d{5,}/.test(unix)){
    let date = parseInt(unix);
    // var date = new Date(unix*1000);
    var output = new Date(date).toUTCString();
    res.json({
      "unix": unix,
      "utc" : output
    });

  } else {
    var dateObj = new Date(unix)
    if (dateObj.toString() === "Invalid Date"){
      res.json({
        "error" : "Invalid Date"
      });
    } else {
      var unix =  Date.now();
      let date = parseInt(unix);
      var output = new Date(date).toUTCString();
      res.json({
        "unix": unix,
        "utc" : output
      });
    }   
  } 
  
})

module.exports = router;
