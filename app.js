// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Import the database client
const bookRoutes = require('./routes/bookRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book API',
            version: '1.0.0',
            description: 'API documentation for Book API',
        },
    },
    apis: ['./routes/*.js'], // Path to the API routes folder
};

const specs = swaggerJsdoc(options);

// Swagger UI endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/books', bookRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
