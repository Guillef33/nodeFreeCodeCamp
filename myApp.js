let express = require("express");
let app = express();
require("dotenv").config();
const port = 3001;
const readline = require("readline");
app.use(express.urlencoded({ extended: true }));
require("./routes/routes")(app);

absolutePath = __dirname + "/views/index.html";
publicAssets = __dirname + "/public";

app.use("/public/", express.static(publicAssets));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Hello World");

module.exports = app;
