import express from "express";
import {
  handleCreateNewUser,
  handleHello,
  handleUserPage,
} from "../controller/homeController";

const router = express.Router();
/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
  router.get("/", handleHello);
  router.get("/user", handleUserPage);
  router.post("/users/create-user", handleCreateNewUser);
  return app.use("/", router);
};

export default initWebRoutes;
