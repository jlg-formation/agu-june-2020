import express from "express";
const app = express.Router();

app.get("/articles", (req, res) => {
  res.json([
    { name: "Tournevis", price: 2.34, qty: 123 },
    { name: "Marteau", price: 4.56, qty: 10 },
    { name: "Scie", price: 7.86, qty: 13 },
    { name: "Pince", price: 3.0, qty: 15 },
    { name: "Clé à molette en prix disounted", price: 3.0, qty: 15 },
  ]);
});

export const ws = app;
