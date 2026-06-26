const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "AK AI",
    status: "Running"
  });
});

app.listen(5000, () => {
  console.log("AK AI Server Started");
});
