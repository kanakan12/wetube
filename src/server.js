import express from "express";
import morgan from "morgan";

const PORT  = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
    console.log("home");
    return res.send("Home");
}

const login = (req, res) => {
    console.log("login");
    return res.send("login");
}

app.use(logger);

app.get("/", home);
app.get("/login", login);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
