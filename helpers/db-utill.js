import { MongoClient } from "mongodb";
export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://HoseinKhan:137778@cluster0.ouyspt3.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
}

export async function insertDucument(client, collection, ducument) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(ducument);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
