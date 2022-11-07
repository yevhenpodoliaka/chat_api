import express from "express"
import cors from "cors"
import logger from "morgan"


import authRouter from "./routes/auth.js"
import usersRouter from "./routes/users.js"


const app = express()
app.use(cors())
app.use(logger("dev"))
app.use(express.json())

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

export default app