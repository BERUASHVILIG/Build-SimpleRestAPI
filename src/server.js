import express from "express";
import appRoutes from "./routes.js";

const app = express();
const port = 3000;

app.use(express.json()); //express bodyParser to read in json format

app.use("/v1", appRoutes);

app.listen(port, () => {
  console.log(`hey, go to http://localhost:${port}`);
});
