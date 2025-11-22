import { Request, Response } from "express";
import { openDb } from "../db/sqlite";

export async function getSubscriptions(req: Request, res: Response) {
  const db = await openDb();
  const subs = await db.all("SELECT id, name FROM subscriptions");
  res.json(subs);
}

export async function addSubscription(req: Request, res: Response) {
  const { name } = req.body;
  const db = await openDb();
  const result = await db.run("INSERT INTO subscriptions (name) VALUES (?)", name);
  res.status(201).json({ id: result.lastID, name });
}