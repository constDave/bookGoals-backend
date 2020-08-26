const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const addBookRouter = require('../server/routes/addBook')
const volleyball = require('volleyball')
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(addBookRouter)
app.use(volleyball)


app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
