import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
let db;
export default async function getDb() {
  if (db) {
    return db;
  }

  const client = new MongoClient(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = await client.db("test");
  return db;
}
