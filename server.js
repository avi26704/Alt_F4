app.use("/api/auth", require("./Auth/Route"))

const express = require("express")
const app = express()
app.use(express.json())
const PORT = 5000
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))
const connectDB=require("./db");
connectDB();



//to handle errors
const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})