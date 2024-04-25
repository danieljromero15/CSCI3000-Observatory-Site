const express = require("express")
const mysql = require("mysql2");
const fs = require("node:fs");
const path = require("node:path");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));

let userDetails = fs.readFileSync("./password.txt", "utf-8").split("\r\n");

/*
password.txt:
user
password
database name
*/
const conn = mysql.createConnection({
    host: "localhost",
    user: userDetails[0],
    password: userDetails[1],
    database: userDetails[2]
});

app.listen(3000, function(){
    console.log("Listening on port 3000...")
});

conn.connect(function (err) {
    if (err) {
        console.log("Error connecting to MySQL:", err);
    } else {
        console.log("Connection established");
    }
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.get("/all", function(req, res){
    conn.query("SELECT * FROM comments", function (err, rows) {
        if(err){
            console.log("ERROR: ", err);
        }else{
            // produce ordered list of people
            let html = "<ol>";
            rows.forEach(function(row){
                html += "<li>" + row.commentstext + "</li><p>" + row.timestamp + "</p>";
            });
            html += "</ol>";

            if(rows.length === 0){
                html = "<p>No comments found.</p>";
            }
            res.send(html);
        }
    });
});

app.post("/form_process", function(req, res){
    const comment = {commentstext: req.body.comment, timestamp: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ')};
    conn.query("INSERT INTO comments SET ?", comment, function(err, result){
        if(err){
            console.log("ERROR:", err);
            res.send("Error in insertion!");
        }else{
            console.log("Inserted " + result.affectedRows + " row"); // success

            let html = "";
            html += "Comment sent!"

            res.send(html);
        }
    });
});