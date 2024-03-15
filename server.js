const express = require('express');
const app = express(); // initializing an app using Express



app.use(express.json()); // provides a body-parser for PUSH requests
app.use("/",require("./routes/userRoutes"));

// EXAMPLES OF ROUTES

// app.get('/api/users', (req, res) => {
//     res.send('<h1>Welcome dear users!</h1>');
// });

// app.get("/api/new", (req, res) => {
//     res.json({"message": "Good job user!"})
// })


const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Users';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    // Perform database operations here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
