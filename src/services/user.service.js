import userDao from "../models/persistence/user.dao.js";

const getUser = (userId) => {
  return userDao.get(userId);
};

const updateUser = (userId, details) => {
  return userDao.update(userId, details);
};

const addUser = (details) => {
  return userDao.insert(details);
};

const removeUser = (userId) => {
  return userDao.insert(userId);
};

export default {
  getUser,
  updateUser,
  addUser,
  removeUser,
};
