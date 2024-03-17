import useDao from "../models/persistence/user.dao.js";

const getUser = (userId) => {
  return useDao.get(userId);
};

const updateUser = (userId, details) => {
  return useDao.update(userId, details);
};

const addUser = (details) => {
  return useDao.insert(details);
};

const removeUser = (userId) => {
  return useDao.insert(userId);
};

export default {
  getUser,
  updateUser,
  addUser,
  removeUser,
};
