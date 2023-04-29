import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

//connection with database
mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log(`BanglaHaat Server is connected with MongoDb`);
});
const port: number = parseInt(process.env.PORT || "8000");

app.listen(port, () => {
  console.log(`BanglaHaat App is listening on port ${port}`);
});
