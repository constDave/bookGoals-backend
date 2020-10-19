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

router.post("/addbook", async (req, res, next) => {
  try {
    if (isValid(req.body)) {
      // Store in the DB
      const book = new Book({
        booktitle: req.body.bookTitle,
        wordgoals: req.body.wordGoals,
        deadline: req.body.deadline
      });

      const result = await book.save();
      res.send(result);

      console.log(book);
    } else {
      res.status(422)
      throw new Error("Required fields cannot be empty");
    }
  } catch (error) {
    next(error);
  }
});

router.get("/addbook", async (req, res, next) => {
  try {
    const bookEntries = await Book.find({});
    res.send(bookEntries);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
