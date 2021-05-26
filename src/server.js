import express from "express";

const PORT  = 4000;

const app = express();

const fstMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed");
    next();
}

const handleProtected = (req, res) => {
    return res.send("Private")
}

app.use(fstMiddleware);
app.use(privateMiddleware);

app.get("/", (req, res) => {
    return res.send("Home");
});
app.get("/protected", handleProtected);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
