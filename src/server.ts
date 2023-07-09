import mongoose from "mongoose"
import app from "./app"

const port = 5000

//////Database Connection
async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ts")
    console.log("MongoDB Connected")
  } catch (err) {
    console.log("failed to connect database", err)
  }
}
connectDB()

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
