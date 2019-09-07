var express = require("express");
var api = require("./routes/api");
var path = require("path")
var app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

PORT = process.env.PORT || 3000;

app.use("/api", api);


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/html/index.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "/html/table.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "/html/reserve.html"));
});


app.listen(PORT, function(){
    console.log("App is listening on port: " + PORT)
});
