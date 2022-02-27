const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PostModel = require("./models/postModel");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

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

let lastOffer = "";
io.on("connection", (socket) => {
  console.log("bir kullanıcı bağlandı!");

  socket.emit("receive", lastOffer);

  socket.on("newOffer", (offer) => {
    console.log(offer);

    lastOffer = offer;
    io.emit("receive", offer);
  });

  socket.on("disconnect", () => {
    console.log("Bir kullanıcı ayrıldı.");
  });
});

http.listen(3001, () => console.log("Server run"));
