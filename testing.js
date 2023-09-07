const readline = require("readline");

app.get("/question", (req, res) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Please enter a color? ", (value) => {
    let color = value;
    console.log(`You entered ${color}`);
    res.send(`You entered ${color}`);
    rl.close();
  });
});
