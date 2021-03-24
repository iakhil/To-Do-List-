const express = require("express");

var items = ["Task 1", "Task 2", "Task 3", "Task 4"];

var workList = [];
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.get("/", function(req, res) {
    // res.write("<h1> This is h1! </h1>")
    var today = new Date();

    var options = {
        weekday: "long", 
        day: "numeric", 
        month: "long"

        
    };

    var day = today.toLocaleDateString("en-US", options);
    res.render("List", {listTitle: "General", kindOfDay: day, newListItems: items});
    



//     if(day === 2)
//     {
//         var dayName = "Tuesday";
//         //r2es.write("<h1> Today is a Tueday! </h1>")
//    // res.render("list", {: dayName})
//     }
});

app.post("/", function(req, res)
{
    var item = req.body.newItem; 
    
    if(req.body.list === "Work") {
        workList.push(item);
        res.redirect("/work");   
    }

    else 
    {
        items.push(item);
        res.redirect("/")
    }
    

  
    // var item = req.body.newItem;
    // res.render("list", {item: item});
    
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workList});
});


app.listen(3000, function() {
    console.log("Server is working!");

});