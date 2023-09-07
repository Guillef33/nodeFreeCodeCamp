let express = require("express");
let bodyParser = require("body-parser");
let app = express();
require("dotenv").config();
require("./routes/routes")(app);

const port = 3001;

app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({ extended: false }));

publicAssets = __dirname + "/public";
absolutePath = __dirname + "/views/index.html";

app.use("/public/", express.static(publicAssets));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
