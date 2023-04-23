const express = require('express');
const router = express.Router();
const PhoneBook = require('../models/phone_book');

// Get all phone books
router .get('/', async (req, res) => {
    try { const phoneBooks = await phoneBook.find();
        res.json(phoneBooks);
        
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
