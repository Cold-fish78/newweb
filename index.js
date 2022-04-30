const express = require('express');
const app = express();
const port = 8001;
app.use(express.urlencoded({extended : true}));

require("dotenv").config();
// for ejs no
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));
//  for routes;
const path = require('path');
app.get('/robot.txt',function(req,res){
    var options = {
        root: path.join(__dirname , )
    };
     
    var fileName = 'robot.txt';
    res.sendFile(fileName, options, function (err) {
        if (err) {
        console.log(

            "error occured" + err
        )
        } else {
            console.log('sent')
        }
    });
});
app.get('/sitemap.xml',function(req,res){
    var options = {
        root: path.join(__dirname , )
    };
     
    var fileName = 'sitemap.xml';
    res.sendFile(fileName, options, function (err) {
        if (err) {
        console.log(

            "error occured" + err
        )
        } else {
            console.log('sent')
        }
    });
})
// app.use('/',('./routes'));
app.use('/',require('./routes/index'));

app.listen(port, function (err) {
    if(err){
        console.log("error in running the server");

    }else{
        console.log("server running at port" + port);
    }
})