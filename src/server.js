import express from "express";

const PORT  = 4000;

const app = express();

app.get("/", (req, res) => {
    return res.send("test");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
