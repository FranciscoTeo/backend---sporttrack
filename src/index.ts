import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import subscriptionRoutes from "./routes/subscriptions";
import { openDb } from "./db/sqlite";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/subscriptions", subscriptionsRoutes);
app.use("/plans", plansRoutes);

app.use("/api/subscriptions", subscriptionRoutes);

async function initDb() {
  const db = await openDb();
  await db.run(`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);
}

initDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
