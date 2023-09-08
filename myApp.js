let express = require("express");
require("dotenv").config();
let bodyParser = require("body-parser");
let app = express();
require("./routes/routes")(app);
const port = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

publicAssets = __dirname + "/public";
absolutePath = __dirname + "/views/index.html";

app.use("/public/", express.static(publicAssets));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
