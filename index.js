var express= require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function(req, res, next) {
    console.log('Record timestamp');
    next();
    });

app.post('/calculator/rest/minus', function(req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var object = {
        "x":x,
        "y":y,
        "result x minus y":x-y
    }
    res.json(object);
    });

    app.post('/calculator/rest/multiply', function(req, res, next) {
        var body = req.body;
        var x = body.x;
        var y = body.y;
        var result = 0;
        var object = {
            "x":x,
            "y":y,
            "result  x multiply y ":x*y
        }
        res.json(object);
        });

        app.post('/calculator/rest/divide', function(req, res, next) {
            var body = req.body;
            var x = body.x;
            var y = body.y;
            var result = 0;
            var object = {
                "x":x,
                "y":y,
                "result  x divided y ":x/y
            }
            res.json(object);
            });

app.listen
    (3000);