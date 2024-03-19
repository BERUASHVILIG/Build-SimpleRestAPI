import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.status(StatusCodes.OK).send({ body: "OK" });
});

export default router;
