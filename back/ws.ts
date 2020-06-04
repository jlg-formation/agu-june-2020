import express from "express";
import { Article } from "../front/src/app/interfaces/article";
const app = express.Router();

const articles: Article[] = [
  { name: "Tournevis", price: 2.34, qty: 123 },
  { name: "Marteau", price: 4.56, qty: 10 },
  { name: "Scie", price: 7.86, qty: 13 },
  { name: "Pince", price: 3.0, qty: 15 },
  { name: "Clé à molette en prix disounted", price: 3.0, qty: 15 },
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

export const ws = app;
