var express = require('express')
var app = express()
const port = 8080
var mysql = require('./mysql_con')
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
app.get('/getCustomers', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    var customers
        mysql.query("SELECT * FROM customer", function (err, result) {
            if (err) throw err;
            customers = JSON.stringify(result)
            res.send(customers)
          })
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })