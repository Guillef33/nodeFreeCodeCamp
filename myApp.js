let express = require("express");
let app = express();

const port = 3001;

absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Hello World");

module.exports = app;
