import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.post("/hello", (req, res) => {
  res.send(`Hello ${req.body.name}`);
});

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
