import express from "express"
import cors from "cors"
import logger from "morgan"


const app = express()
app.use(cors())
app.use(logger())
app.use(express.json())

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

export default app