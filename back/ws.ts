import express from "express";
import { Article } from "../front/src/app/interfaces/article";
const app = express.Router();

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 123 },
  { id: "a2", name: "Marteau", price: 4.56, qty: 10 },
  { id: "a3", name: "Scie", price: 7.86, qty: 13 },
  { id: "a4", name: "Pince", price: 3.0, qty: 15 },
  { id: "a5", name: "Clé à molette en prix disounted", price: 3.0, qty: 15 },
];

app.use(express.json());

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", (req, res) => {
  const article = req.body;
  console.log("article: ", article);
  articles.push(article);
  res.status(201).json(article);
});

app.delete("/articles/:myId", (req, res) => {
  const id = req.params.myId;
  const index = articles.findIndex((a) => a.id === id);
  articles.splice(index, 1);
  res.status(204).end();
});

export const ws = app;
