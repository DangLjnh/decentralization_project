import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8082;
configViewEngine(app);
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("JWT backend is running on port =" + PORT);
});
