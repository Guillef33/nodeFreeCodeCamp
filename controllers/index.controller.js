const { Pool } = require("pg");

new Pool({});

const displayQuestion = (req, res) => {
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
};

const displayAnswer = (req, res) => {
  const color = req.body.color;
  res.send(`
          <html>
            <body>
              <p>Tu nombre es  ${color}</p>
              <a href="/question">Juega de nuevo</a>
            </body>
          </html>
        `);
};

module.exports = {
  displayQuestion,
  displayAnswer,
};
