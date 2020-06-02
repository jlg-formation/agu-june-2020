console.log("starting server");

const express = require("express");

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('req.url: ', req.url);
    next();
});

app.use((req, res, next) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
