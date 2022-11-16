import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();
configViewEngine(app);
initWebRoutes(app);

const PORT = 8082;
app.listen(PORT, () => {
  console.log("JWT backend is running on port =" + PORT);
});
