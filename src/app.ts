import express from "express";
import notFound from "./app/middlewares/notFound";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);

export default app;
