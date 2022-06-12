import express from "express";
import routes from "./routes/index";

const app = express(); //instancia do express

app.use(express.json())

routes(app);

export default app;