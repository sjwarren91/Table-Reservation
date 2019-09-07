var express = require("express");
var router = express.Router();
var uuidv1 = require("uuid/v1");

var reservation = [
    {
        name: "Bruce",
        email: "Bruce_Willis@gmail.com",
        number: "0434817232",
        id: "99c12cb1-5251-4f80-9886-c327448575bd"
    },
    {
        name: "Gerard",
        email: "lil_bitch_boi@gmail.com",
        number: "0434254678",
        id: "9b758ee1-4749-469c-94f9-e20f6216d8af"
    },

];

router.get("/tables", function (req, res) {
    var reserved = reservation.slice(0, 5);
    var waiting = reservation.slice(5);

    var list = {
        reserved: reserved,
        waiting: waiting
    }

    res.json(list);
})

router.post("/reserve", function (req, res) {

    console.log('222', req.body);

    if (req.body) {
        var uuid = uuidv1();
        var newReservation = {...req.body, id: uuid};
        console.log(newReservation)
        reservation.push(newReservation);
        res.json(true);

    } else {
        res.json(false);
    }

});

module.exports = router;