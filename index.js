var express = require("express");
var app = express()
var bodyParser = require("body-parser");
var router = require("./routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//SERVER CONNECTION
// app.listen(8000);

const port = 5000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// ROUTE
app.use("/", router);
app.use("/employee", require("./routes"));

