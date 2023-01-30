import express, { Express } from "express";
import birthdayMonth from "./routers/birthdayMonthRouter.js"

const app = express();

app.get("/health", (_req, res) => res.send("FOI!"))

app.use(express.json());

app.use(birthdayMonth);

app.listen(5000, () => {console.log("Server running in port 5000")});

export default app;