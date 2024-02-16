const express = require("express");

const swaggerUi = require("swagger-ui-express");

const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

const port = 3000;

// Swagger configuration

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Express Swagger API",

      version: "1.0.0",

      description: "A simple Express API with Swagger documentation",
    },
  },
  apis: ["./routes/*.js"], // Path to the API routes
};
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


// Sample route
app.get('/api/greet', (req, res) => {
  /**
   * @swagger
   * /api/greet:
   *   get:
   *     summary: Returns a greeting message
   *     responses:
   *       200:
   *         description: A successful response
   *         content:
   *           application/json:
   *             example:
   *               message: 'Hello, World!'
   */

  res.json({ message: 'Hello, World!' });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 