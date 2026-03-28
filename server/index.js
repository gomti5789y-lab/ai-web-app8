const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server chal raha hai 🚀");
});

// AI route
app.post("/api/ai", (req, res) => {
  const { prompt } = req.body;

  res.json({
    reply: "AI response: " + prompt
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
