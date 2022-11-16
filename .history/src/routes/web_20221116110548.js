import express from "express";

const router = express.Router();
require("dotenv").config();
/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
  const PORT = process.env.PORT || 8080;
  router.get("/", (req, res) => {
    return res.send("Hello, World!");
  });
  return app.use("/", router);
};

export default initWebRoutes;
