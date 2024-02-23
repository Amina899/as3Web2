/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the book.
 *           minLength: 1
 *           maxLength: 100
 *         author:
 *           type: string
 *           description: The author of the book.
 *           minLength: 1
 *           maxLength: 100
 *         publish_year:
 *           type: integer
 *           description: The year the book was published.
 *           minimum: 100
 *           maximum: 2026
 *         pages_count:
 *           type: integer
 *           description: The number of pages in the book.
 *           minimum: 1
 *           maximum: 13000
 *         price:
 *           type: number
 *           description: The price of the book.
 *           minimum: 0
 *           maximum: 15000
 */

const { check, validationResult } = require('express-validator');

const validateBook = () => {
    return [
        check('name').isLength({ min: 1, max: 100 }).withMessage('Name must be between 1 and 100 characters'),
        check('author').isLength({ min: 1, max: 100 }).withMessage('Author must be between 1 and 100 characters'),
        check('publish_year').isInt({ min: 100, max: 2026 }).withMessage('Publish year must be between 100 and 2026'),
        check('pages_count').isInt({ min: 1, max: 13000 }).withMessage('Pages count must be between 1 and 13000'),
        check('price').isFloat({ min: 0, max: 15000 }).withMessage('Price must be between 0 and 15000'),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateBook, validate };
