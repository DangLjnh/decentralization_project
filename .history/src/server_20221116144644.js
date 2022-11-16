import bodyParser from "body-parser";
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//config body-parser (middleware)
app.use(bodyParser.json());

//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("hello " + PORT);
});
