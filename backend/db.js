const mongoose = require("mongoose");

const url =
  "mongodb://ankit:root@ac-1xnyt1b-shard-00-00.bwqnd79.mongodb.net:27017,ac-1xnyt1b-shard-00-01.bwqnd79.mongodb.net:27017,ac-1xnyt1b-shard-00-02.bwqnd79.mongodb.net:27017/Quora-clone?ssl=true&replicaSet=atlas-huu57h-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
