const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  booktitle: {
    type: String,
    required: true,
  },
  wordgoals: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: false,
  },
});

const Book = mongoose.model('book', bookSchema);
module.exports = Book;
