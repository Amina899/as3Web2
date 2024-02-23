const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

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

app.use(cors());
app.use(bodyParser.json());

// Swagger UI endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
