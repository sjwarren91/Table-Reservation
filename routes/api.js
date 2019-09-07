var express = require("express");
var router = express.Router();
var uuidv1 = require("uuid/v1");

var reservation = [
    {
        name: "Bruce",
        email: "Bruce_Willis@gmail.com",
        number: "0434817232"
    },
    {
        name: "Gerard",
        email: "lil_bitch_boi@gmail.com",
        number: "0434254678"
    },

];

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
    if(req.body){
        var id = uuidv1();
        req.body.ID = id;
        reservation.push(req.body);
        res.json(true);
    } else {
        res.json(false);
    }
    
});

module.exports = router;