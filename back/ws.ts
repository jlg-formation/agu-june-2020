import express from "express";
import { Article } from "../front/src/app/interfaces/article";
import fs from "fs";
import path from "path";
const app = express.Router();

const filename = path.resolve(__dirname, "./data.db");

const articles: Article[] = JSON.parse(
  fs.readFileSync(filename, { encoding: "utf-8" })
);

app.use(express.json());

app.get("/articles", (req, res) => {
  fs.readFile(filename, { encoding: "utf-8" }, (err, result) => {
    if (err) {
      res.status(500).end();
      return;
    }
    const articles = JSON.parse(result);
    res.json(articles);
  });
});

app.post("/articles", (req, res) => {
  (async () => {
    const article = req.body;
    console.log("article: ", article);
    articles.push(article);
    await fs.promises.writeFile(
      filename,
      JSON.stringify(articles, undefined, 2)
    );
    res.status(201).json(article);
  })();
});

app.delete("/articles/:myId", (req, res) => {
  (async () => {
    const id = req.params.myId;
    const index = articles.findIndex((a) => a.id === id);
    articles.splice(index, 1);
    await fs.promises.writeFile(
      filename,
      JSON.stringify(articles, undefined, 2)
    );
    res.status(204).end();
  })();
});

app.delete("/bulk/articles", (req, res) => {
  (async () => {
    const ids = req.body;
    for (const id of ids) {
      const index = articles.findIndex((a) => a.id === id);
      articles.splice(index, 1);
    }
    await fs.promises.writeFile(
      filename,
      JSON.stringify(articles, undefined, 2)
    );
    res.status(204).end();
  })();
});

export const ws = app;
