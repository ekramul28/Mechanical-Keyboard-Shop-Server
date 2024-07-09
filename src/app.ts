import express, { Application } from "express";
import notFound from "./app/middlewares/notFound";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
const app: Application = express();

//parsers

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
