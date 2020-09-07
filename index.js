const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const addBookRouter = require('../server/routes/addBook')
const deleteBookRouter = require('../server/routes/deleteBook')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

app.use(cors());
app.use(express.json())
app.use(addBookRouter)
app.use(deleteBookRouter)
app.use(morgan('dev'))

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser:true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => {console.log('Database connected');
})


app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
