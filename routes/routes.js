module.exports = function (app) {
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
};
