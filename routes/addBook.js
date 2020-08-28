const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

function isValid(book) {
  return (
    book.bookTitle &&
    book.bookTitle.toString().trim() !== "" &&
    book.wordGoals &&
    book.wordGoals.toString().trim() !== ""
  );
}

router.post("/addbook", (req, res) => {
  if (isValid(req.body)) {
    //Store in the DB
    const book = new Book({
      booktitle: req.body.bookTitle,
      wordgoals: req.body.wordGoals,
      deadline: req.body.deadline
    });

    book.save().then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(error => console.log(error.message)
    )
    console.log(book);
  } else {
    res.status(422);
    res.json({
      message: "Form fields are required to save."
    });
  }
});

module.exports = router;
