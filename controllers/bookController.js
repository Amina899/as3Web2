const db = require('../db');
const { validationResult, check } = require('express-validator');
const validation = require('../utils/validation');
const { sendEmailNotification } = require('../services/emailService');
const uuid = require('uuid');

const validateBook = [
    check('name').isLength({ min: 2, max: 30 }).withMessage('Invalid value for Name'),
    check('author').isLength({ min: 2, max: 30 }).withMessage('Invalid value for Author'),
    check('publish_year').isInt({ min: 1900, max: 2024 }).withMessage('Invalid value for PublishYear'),
    check('pages_count').isInt({ min: 3, max: 1300 }).withMessage('Invalid value for PagesCount'),
    check('price').isFloat({ min: 0, max: 150000 }).withMessage('Invalid value for Price'),
];

const bookController = {
    getAllBooks: async (req, res) => {
        try {
            console.log(`[${new Date().toISOString()}] INFO: Route: GET /books, IP: ${req.ip}`);
            await db.execute('INSERT INTO logs (id, log_level, route, user_ip) VALUES (?, ?, ?, ?)',
              [uuid.v4(), 'info', '/books', req.ip]);
            const [rows] = await db.query('SELECT * FROM books');
            res.json(rows);
        } catch (error) {
            console.error(`[${new Date().toISOString()}] ERROR: Route: GET /books, IP: ${req.ip}, Error: ${error}`);
            res.status(500).json({ message: 'Error fetching books' });
        }
    },

    addBook: async (req, res) => {
        try {
            await validation.validateBook(req);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const newBook = req.body;
            await db.query('INSERT INTO books SET ?', newBook);
            sendEmailNotification(newBook);
            console.log(`[${new Date().toISOString()}] INFO: Route: POST /books, IP: ${req.ip}, Book added: ${JSON.stringify(newBook)}`);
            await db.execute('INSERT INTO logs (id, log_level, route, user_ip) VALUES (?, ?, ?, ?)',
              [uuid.v4(), 'info', '/books/add', req.ip]);
            res.json({ message: 'Book added successfully' });
        } catch (error) {
            console.error(`[${new Date().toISOString()}] ERROR: Route: POST /books, IP: ${req.ip}, Error: ${error}`);
            res.status(500).json({ message: 'Error adding book' });
        }
    },

    updateBook: async (req, res) => {
        try {
            await validation.validateBook(req);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const bookId = req.params.id;
            const updatedBook = req.body;
            await db.query('UPDATE books SET ? WHERE id = ?', [updatedBook, bookId]);
            console.log(`[${new Date().toISOString()}] INFO: Route: PUT /books/${bookId}/update, IP: ${req.ip}, Book updated: ${JSON.stringify(updatedBook)}`);
            await db.execute('INSERT INTO logs (id, log_level, route, user_ip) VALUES (?, ?, ?, ?)',
              [uuid.v4(), 'info', `/books/${bookId}/update`, req.ip]);

            res.json({ message: 'Book updated successfully' });
        } catch (error) {
            console.error(`[${new Date().toISOString()}] ERROR: Route: PUT /books/${bookId}/update, IP: ${req.ip}, Error: ${error}`);
            res.status(500).json({ message: 'Error updating book' });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const bookId = req.params.id;
            await db.query('DELETE FROM books WHERE id = ?', bookId);
            console.log(`[${new Date().toISOString()}] INFO: Route: DELETE /books/${bookId}/delete, IP: ${req.ip}`);
            await db.execute('INSERT INTO logs (id, log_level, route, user_ip) VALUES (?, ?, ?, ?)',
              [uuid.v4(), 'info', `/books/${bookId}/delete`, req.ip]);

            res.json({ message: 'Book deleted successfully' });
        } catch (error) {
            console.error(`[${new Date().toISOString()}] ERROR: Route: DELETE /books/${bookId}/delete, IP: ${req.ip}, Error: ${error}`);
            res.status(500).json({ message: 'Error deleting book' });
        }
    },
};

module.exports = bookController;
