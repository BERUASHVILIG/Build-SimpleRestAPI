import express from "express";
import userRoutes from "./user.routes.js";
import mainRoutes from "./main.routes.js";

const app = express();
const port = 3000;

app.use(express.json()); //express bodyParser to read in json format

app.use("/v1", mainRoutes);

app.use("/v1/user", userRoutes);

app.listen(port, () => {
  console.log(`hey, go to http://localhost:${port}`);
});
