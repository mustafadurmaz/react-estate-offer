const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PostModel = require("./models/postModel");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://mdurmaz:sason123@cluster0.kzyvo.mongodb.net/estatedb?retryWrites=true&w=majority"
);

app.get("/getoffers", (req, res) => {
  PostModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createoffer", async (req, res) => {
  PostModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
