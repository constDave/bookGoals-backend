const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.delete('/deleteBook', async (req, res) => {
    console.log(req.body);
    
    try {
        const name = req.body.name
        
        const deletedBook = await Book.findOneAndDelete(name)
        res.send(deletedBook)
    } catch (error) {
        console.log(error);
        
    }
    
})

module.exports = router