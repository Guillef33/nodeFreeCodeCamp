let express = require("express");
let app = express();
require("dotenv").config();
const readline = require("readline");
app.use(express.urlencoded({ extended: true }));

// app.get("/question", (req, res) => {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   rl.question("Please enter a color? ", (value) => {
//     let color = value;
//     console.log(`You entered ${color}`);
//     res.send(`You entered ${color}`);
//     rl.close();
//   });
// });

app.get("/question", (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="/answer" method="POST">
          <label for="color">Por favor ingresa tu nombre</label>
          <input type="text" id="color" name="color">
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/answer", (req, res) => {
  const color = req.body.color;
  res.send(`
    <html>
      <body>
        <p>Tu nombre es  ${color}</p>
        <a href="/question">Juega de nuevo</a>
      </body>
    </html>
  `);
});

const port = 3001;

absolutePath = __dirname + "/views/index.html";
publicAssets = __dirname + "/public";

app.use("/public/", express.static(publicAssets));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.use("/json", (req, res, next) => {
  console.log(req.method + req.path + req.ip);
  next();
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  console.log(req.time);
  next();
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  res.send(req.time);
});

app.get("/echo", (req, res) => {
  res.send(
    "Escribe una palabra luego de echo/ en la URL del navegador y la mostraremos como un JSON"
  );
});

app.get("/echo/:word", (req, res) => {
  word = req.params;
  res.json({ echo: word });
});

app.get("/name", (req, res) => {
  name = req.query;
  if (Object.keys(req.query).length === 0) {
    res.send(
      "Escribe tu nombre con la siguiente escructura y pegala en la barra de busqueda ?nombre=Carlos&apellido=Fernandez&edad=21"
    );
  } else {
    res.json({ name: name });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Hello World");

module.exports = app;
