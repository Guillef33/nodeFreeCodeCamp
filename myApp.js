let express = require("express");
let app = express();

const port = 3001;

absolutePath = __dirname + "/views/index.html";
publicAssets = __dirname + "/public";

app.use("/public/", express.static(publicAssets));

app.get("/", (req, res) => {
  // res.send("Hello Express")
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Hello World");

module.exports = app;
