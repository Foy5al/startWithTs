import express from "express";
import cors from "cors";
import commonRoute from "./route/v1/common.route";
import userRoute from "./route/v1/user.route";

const app = express();

app.use(express.static(__dirname + "/public/"));
app.use(cors());
app.use(express.json());

app.use("/api/v1", commonRoute);
app.use("/api/v1/user", userRoute);

app.get("/", (_req, res) => {
  res.send(`<p>listening.....</p>`);
});

export default app;
