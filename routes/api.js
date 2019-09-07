var express = require("express");
var router = express.Router();

var reservation = [];

router.get("/tables", function(req, res) {
    var reserved = reservation.slice(0,5);
    var waiting = reservation.slice(5);

    var list = {
        reserved: reserved,
        waiting: waiting
    }

    res.json(list);
})

router.post("/reserve", function(req, res) {
    console.log(req.body)
    if(req.body){
        reservation.push(req.body);
        res.json(true);
    } else {
        res.json(false);
    }
    
});

module.exports = router;