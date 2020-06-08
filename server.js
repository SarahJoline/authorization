const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const authRoute = require("./routes/authRoutes");
const postRoute = require("./routes/post");

dotenv.config();

const connection = mongoose.connection;
const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function () {
  console.log("connected to db instance");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/post", postRoute);

app.listen(PORT, () => {
  console.log(`listening at: http://localhost:${PORT}`);
});
