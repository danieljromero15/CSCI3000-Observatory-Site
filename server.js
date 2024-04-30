const express = require("express")
const mysql = require("mysql2");
const fs = require("node:fs");
const path = require("node:path");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));

// sets line separator depending on OS (only tested on linux rn)
let br
if (process.platform === "win32") br = "\r\n";
else br = "\n"
let userDetails = fs.readFileSync("./password.txt", "utf-8").split(br);

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

app.listen(3000, function () {
    console.log("Listening on port 3000...")
});

conn.connect(function (err) {
    if (err) {
        console.log("Error connecting to MySQL:", err);
    } else {
        console.log("Connection established");
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.get("/all", function (req, res) {
    conn.query("SELECT * FROM appointments", function (err, rows) {
        if (err) {
            console.log("ERROR: ", err);
        } else {
            // produce ordered list of people
            let html = "<ol>";
            rows.forEach(function (row) {
                html += "<li>" + row.name + "</li><p>" + row.date + "</p>";
            });
            html += "</ol>";

            if (rows.length === 0) {
                html = "<p>No comments found.</p>";
            }
            res.send(html);
        }
    });
});

/*
id: autoincrement int (optional)
name: varchar(45) not null
date: datetime not null
 */
app.post("/form_process", function (req, res) {
    const appointment = {name: req.body.name, date: req.body.appointment.slice(0, 19).replace('T', ' ')};
    conn.query("INSERT INTO appointments SET ?", appointment, function (err, result) {
        if (err) {
            console.log("ERROR:", err);
            res.send("Error in insertion!");
        } else {
            console.log("Inserted " + result.affectedRows + " row"); // success

            let html = "";
            html += "Appointment set!"

            res.send(html);
        }
    });
});