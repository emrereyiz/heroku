var express = require("express"),
    app = express();
    var port = process.env.PORT || 3000;
    

app.get("/", function(req, res){
    res.send("deneme")
});

app.listen(port, function(err, data){
    if(!err){
        console.log(data);
    }
});