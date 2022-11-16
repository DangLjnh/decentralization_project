import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
configViewEngine(app);
initWebRoutes(app);

app.listen(3000, () => {
  console.log("hello" + PORT);
});
