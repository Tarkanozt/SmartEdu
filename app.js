const express = require("express");
const { Sequelize } = require("sequelize");
const pageRoute = require("./routes/pageRoute");

const app = express();

// Database
/* const sequelize = new Sequelize("postgres://postgres:gallus:5432/smartedu"); */

const sequelize = new Sequelize("postgres", "postgres", "gallus", {
  host: "localhost",
  dialect: "postgres",
});

//Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));

// Routes
app.use("/", pageRoute);

const port = 3000;
app.listen(port, async () => {
  console.log(`App started on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
