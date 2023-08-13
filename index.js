var express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
var Router = require("./routes/router");
const message = require("./controller/contant");
var app = express();

app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    parameterLimit: 100000,
    extended: false,
  })
);

app.use(
  bodyParser.json({
    limit: "5mb",
  })
);

app.use("/bucket", Router);

let dir = `./${message.s3Name}`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const port = process.env.PORT || 3000;

app.listen(port,()=>{
  try {
    console.log(`Connected on port ${port}`);
  } catch (error) {
    console.log("Connection Error");
  }
});
