const express = require('express');
const app = express(); // initializing an app using Express
const dotenv = require("dotenv").config(); // used to import environment variables
const errorHandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbConnection"); // initializing function to connect to MongoDB

connectDB(); // connecting to MongoDB

// app.use() is used whenever we need a middleware
app.use(express.json()); // provides a body-parser which parses the data received from client side to send it to server
app.use("/",require("./routes/userRoutes"));
app.use(errorHandler);

// EXAMPLES OF ROUTES

// app.get('/api/users', (req, res) => {
//     res.send('<h1>Welcome dear users!</h1>');
// });

// app.get("/api/new", (req, res) => {
//     res.json({"message": "Good job user!"})
// })


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


