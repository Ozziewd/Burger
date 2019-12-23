var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "burger_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'burger_db'
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/",(req, res)=>{
    var querString = "SELECT * FROM burgers;"
    connection.query(querString, (err, results)=>{
        if (err) throw err;
        console.log(results)
        res.render("index", {food: results})
    })
})
app.put("/api/burger", (req, res)=>{
    var id = req.body.burgerId
    var queryString = `UPDATE burgers SET devoured = 1 WHERE id = ?`
    connection.query(queryString, id, (results)=>{
        console.log(results)
        res.sendStatus(200)
    })
})
app.post("/api/burger", (req, res)=>{
  const name = req.body.name
  console.log(name)
  var querString= `INSERT INTO burgers (burger_name, devoured) VALUES (?,?)`

  connection.query(querString,[name, 0], (results)=>{
    console.log(results)
        res.sendStatus(200)
  })
})


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  