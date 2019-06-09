import express from "express";
import consign from "consign";

const PORT = 3000;

const app = express();

//formata o retorno do json
app.set("json spaces", 4)

consign()
    .include("db.js")
    .then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

app.listen(PORT, () => console.log('nodejsexpress API - porta ${PORT}'));