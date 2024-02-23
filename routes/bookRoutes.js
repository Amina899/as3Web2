const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { validateBook, validate } = require('../utils/validation');

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books.
 *     responses:
 *       200:
 *         description: A list of books.
 *       500:
 *         description: Internal server error.
 */
router.get('/', bookController.getAllBooks);

/**
 * @swagger
 * /books/add:
 *   post:
 *     summary: Add a new book
 *     description: Add a new book to the library.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book added successfully.
 *       400:
 *         description: Bad request. Invalid data provided.
 *       500:
 *         description: Internal server error.
 */
router.post('/add', validateBook(), validate, bookController.addBook);

/**
 * @swagger
 * /books/{id}/update:
 *   put:
 *     summary: Update a book
 *     description: Update details of an existing book.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the book to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book updated successfully.
 *       400:
 *         description: Bad request. Invalid data provided.
 *       404:
 *         description: Book not found.
 *       500:
 *         description: Internal server error.
 */
router.put('/:id/update', validateBook(), validate, bookController.updateBook);

/**
 * @swagger
 * /books/{id}/delete:
 *   delete:
 *     summary: Delete a book
 *     description: Delete a book from the library.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the book to delete.
 *     responses:
 *       200:
 *         description: Book deleted successfully.
 *       404:
 *         description: Book not found.
 *       500:
 *         description: Internal server error.
 */
router.delete('/:id/delete', bookController.deleteBook);

module.exports = router;
