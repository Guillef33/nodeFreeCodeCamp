let bodyParser = require("body-parser");

const {
  displayQuestion,
  displayAnswer,
} = require("../controllers/index.controller");

module.exports = function (app) {
  let urlencodedParser = bodyParser.urlencoded({ extended: false });

  app.get("/question", displayQuestion);

  app.post("/answer", urlencodedParser, displayAnswer);

  app.use("/json", (req, res, next) => {
    res.send(req.method + req.path + req.ip);
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
      `<html>
        <body> 
            <h2>Escribe una palabra luego de echo/ en la URL del navegador y la mostraremos como un JSON</h2>         
        </body>
      </html>`
    );
  });

  app.get("/echo/:word", (req, res) => {
    word = req.params;
    res.json({ echo: word });
  });

  app.get("/crud", (req, res) => {});

  app.get("/name", (req, res) => {
    name = req.query;
    if (Object.keys(req.query).length === 0) {
      res.send(
        `<html>
            <body> 
            <h2>Escribe tu nombre con la siguiente escructura y pegala en la barra de busqueda ?nombre=Carlos&apellido=Fernandez&edad=21</h2>       
            </body>
        </html>`
      );
    } else {
      res.json({ name: name });
    }
  });

  app.post("/your-name", urlencodedParser, function (req, res) {
    const firstName = req.body.first;
    const lastName = req.body.last;

    res.send("welcome, " + firstName + lastName);
  });

  app.get("/", (req, res) => {
    res.sendFile(absolutePath);
  });
};
