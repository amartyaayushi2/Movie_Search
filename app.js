var request = require('request');
var express = require('express');
var app = express();

app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results",function(req, res){
    var movie=req.query.movie;
    // console.log(movie);
    request("https://www.omdbapi.com/?apikey=9eeba627&s="+movie, function(error, response, body){
        if (!error && response.statusCode==200){
            // res.send(body)
            var data= JSON.parse(body);
            res.render("results",{data: data});
        }
    });
});




app.listen(3000,function(){
    console.log("Movie server has started on Port 3000 (localhost:3000/)");
});