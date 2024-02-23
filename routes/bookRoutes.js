const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { validateBook, validate } = require('../utils/validation');

router.get('/', (req, res, next) => {
    console.log(`[${new Date().toISOString()}] INFO: Route: GET /books, IP: ${req.ip}`);
    next();
}, bookController.getAllBooks);

router.post('/add', validateBook(), validate, (req, res, next) => {
    console.log(`[${new Date().toISOString()}] INFO: Route: POST /books/add, IP: ${req.ip}`);
    next();
}, bookController.addBook);

router.put('/:id/update', validateBook(), validate, (req, res, next) => {
    console.log(`[${new Date().toISOString()}] INFO: Route: PUT /books/${req.params.id}/update, IP: ${req.ip}`);
    next();
}, bookController.updateBook);

router.delete('/:id/delete', (req, res, next) => {
    console.log(`[${new Date().toISOString()}] INFO: Route: DELETE /books/${req.params.id}/delete, IP: ${req.ip}`);
    next();
}, bookController.deleteBook);

module.exports = router;