const exress = require("express");

const app = exress();

app.get("/", (req, res) => {
  res.send("INDEX PAGE");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
