console.log("starting server");

const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req.url: ", req.url);
  next();
});

app.use(express.static("../front/dist/front"));
app.use(serveIndex("../front/dist/front"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
