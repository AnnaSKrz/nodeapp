const functions = require("./function");
const express = require("express"); 
const path = require("path");
const server = express();
const port = process.env.PORT || 3000; //port
//process.env.PORT dostosowujemy się do wolnego portu jaki usługodawca nam udostępni - dla potrzeb hostowania
// || 3000 -> żeby działało lokalnie
const x = 11;


server.set("view engine","hbs")
server.use("/assets",express.static(path.join(__dirname,"./assets")));
server.use("/js",express.static(path.join(__dirname,"./js")));
//send zamieniamy na render, jako odpowiedź to dany plik w katalogu views
server.get("/", function (req,res) {
    res.render("index",{
        pageTitle:"LekcjaNode",
        title: functions.someTitle,
        title2: functions.someFunction(),
        subsubTitle: x>10 ? functions.someFunction() : null
        
    })
})
server.get("/about",function (req,res){
    res.render("about")
})
// server.get("/section/technology",function(req,res){
//     res.send("strona technologiczna")
// })

server.listen(port, (err) => {
    if(err) {
        return console.log(`wystąpił błąd ${err}`);
    }
    else{
    console.log(`Aplikacja działa na porcie ${port}`);
}});
