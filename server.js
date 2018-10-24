var express = require ("require");
var exhandlebars = require ("express-handlebars");
var mysql = require ("mysql");
 if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
   connection = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "root",
     database: "burgers_db"
   })
 }
var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { burgers: data });
    });
  });

  

  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });