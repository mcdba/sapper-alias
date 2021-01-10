import sirv from "sirv";
import express from "express";
const app = express();
import compression from "compression";
import * as sapper from "@sapper/server";
// import dotenv from "dotenv";
// dotenv.config();
// import { MongoClient } from "mongodb";
// const client = new MongoClient(process.env.MONGO_DB_URI);
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     const db = await client.db("test");

//     console.log("Connected successfully to server");

//     db.listCollections().toArray(function (err, collInfos) {
//       console.log(collInfos.map((c) => c.name));

//       // collInfos is an array of collection info objects that look like:
//       // { name: 'test', options: {} }
//     });
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  compression({ threshold: 0 }),
  sirv("static", { dev }),
  sapper.middleware()
);

app.listen(PORT, (err) => {
  if (err) console.log("error", err);
});
