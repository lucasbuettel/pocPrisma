import express from "express";
import birthdayMonth from "./routers/birthdayMonth-router.js";
var app = express();
app.get("/health", function (_req, res) { return res.send("OK!"); });
app.use(express.json());
app.use(birthdayMonth);
app.listen(5432, function () { console.log("Server running in port 5000"); });
export default app;
