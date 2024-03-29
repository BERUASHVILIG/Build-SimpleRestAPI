import express from "express";
import { StatusCodes } from "http-status-codes";

import userService from "./services/user.service.js";

const router = express.Router();

const STATUS = {
  success: "OK",
  failure: "NO",
};

router.get("/all", (req, res) => {
  const users = userService.getAllUsers();
  if (users.length) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: users,
    });
  }
  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: `No users  found`,
  });
});

router.get("/get/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getUser(id);

  if (user) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      user,
    });
  }
  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: `No user  found`,
  });
});

router.post("/add", (req, res) => {
  const { body: user } = req;

  const addedUser = userService.addUser(user);
  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    user: addedUser,
  });
});

router.put("/update/:id", (req, res) => {
  const { body: user } = req;
  const id = parseInt(req.params.id, 10);

  const updatedUser = userService.updateUser(id, user);
  console.log(updatedUser);
  if (updatedUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      user: updatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User "${id}" is not found`,
    });
  }
});

export default router;
