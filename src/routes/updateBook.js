const express = require('express');

const router = express.Router();
const Book = require('../models/bookModel');

router.patch('/updatebook', (req, res) => {
  res.send('Update method hit');
});

module.exports = router;
