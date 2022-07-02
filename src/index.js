const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require("./connection");

app.use((error, req, res, next) => {
  console.log("Error name: ", error.name);
});

//route principal
app.get("/", (req, res) => {
  res.send("backend");
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo correctamente.`);
});