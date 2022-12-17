const mongoose = require("mongoose");

const connected = () => {
  console.log("Database Connected");
};
const disconnected = () => {
  console.log("Could not connect database");
};

mongoose.connect(
  "mongodb+srv://root:root@cluster0.tujj06w.mongodb.net/testDB?retryWrites=true&w=majority",
  connected,
  disconnected
);
