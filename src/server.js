require("dotenv").config();
/* const mongoose = require("mongoose"); */
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URL);

/* main().catch((err) => console.log(err)); */

async function main() {
  await client.connect();
  console.log("connexion ok");
  const db = client.db("Wedding");
  const collection = db.collection("test");
  const insertStuff = await collection.insertMany([
    { a: 1 },
    { b: 2 },
    { c: 3 },
  ]);
  console.log("doc inserees");
  return "done";

  /*   await mongoose.connect(process.env.MONGO_URL);

  const Personne = mongoose.model("Personne", {
    nom: String,
    prenom: String,
  }); */
}

main()
  .then(console.log())
  .catch(console.error())
  .finally(() => client.close());
