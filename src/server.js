import express from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const port = 3000;

const STATUS = {
  SUCCESS: "OK",
  FAULURE: "NO",
};

app.use(express.json()); //express bodyParser to read in json format

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send({ body: "hello people" });
});

app.post("/add", (req, res) => {
  const data = [];
  const { body } = req;

  data.push(req.body);
  if (!body.name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.FAULURE,
      message: "Name is Required",
    });
  }
  return res.status(StatusCodes.CREATED).send({
    status: STATUS.SUCCESS,
    message: data,
  });
});

app.listen(port, () => {
  console.log(`hey, go to http://localhost:${port}`);
});
