import express from "express";
import { handleHello } from "../controller/homeController";

const router = express.Router();
/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
  router.get("/", handleHello);

  router.get("/about", (req, res) => {
    return res.send("Hello, World! Linh");
  });
  return app.use("/", router);
};

export default initWebRoutes;
