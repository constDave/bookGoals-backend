const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const updateBookRouter = require("./routes/updateBook");
const deleteBookRouter = require("./routes/deleteBook");
const addBookRouter = require("./routes/addBook");

const port = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use(addBookRouter);
app.use(deleteBookRouter);
app.use(updateBookRouter);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once("open", () => {
  console.log("Database connected");
});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  res.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: error.stack
  });
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
