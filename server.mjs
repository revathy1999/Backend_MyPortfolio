import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import portfolioroutes from "./routes/portfolioRoutes.mjs";
import dotenv from "dotenv"
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err.message));

app.use("/api/portfolio", portfolioroutes);
const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
