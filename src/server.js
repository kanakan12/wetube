import express from "express";

const PORT  = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log("middle");
    next();
}

app.get("/", gossipMiddleware, (req, res) => {
    return res.send("test");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
