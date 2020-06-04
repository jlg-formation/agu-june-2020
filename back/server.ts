console.log("starting server");

import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();
// set port to 3000
const port = 3000;


app.use(cors());

app.use((req, res, next) => {
  console.log("req.url: ", req.url);
  next();
});

app.use(express.static("../front/dist/front"));
app.use(serveIndex("../front/dist/front"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
