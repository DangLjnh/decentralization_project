import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
// const PORT = process.env.PORT || 8080;
const port = process.env.PORT || 8081;
configViewEngine(app);
initWebRoutes(app);

app.listen(port && port, () => {
  console.log("JWT backend is running on port =" + port);
});
