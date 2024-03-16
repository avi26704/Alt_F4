const mongoose = require('mongoose');
const MONGOURL = process.env.MONGO_URL;

const connectDB = (async () => {
    try {
        await mongoose.connect(MONGOURL);
        console.log("Connected to MongoDB successfully.");
    }
    catch(err) {
        console.error("Error connecting to MongoDB: ",err);
    }
});

// const uri = 'mongodb://localhost:27017/Users';
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB successfully');
//     // Perform database operations here
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });

module.exports = connectDB