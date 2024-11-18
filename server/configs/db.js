import { MongoClient, ServerApiVersion } from 'mongodb';
const dbURI = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DATABASE;
const client = new MongoClient(dbURI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    await client.connect();
    await client.db().command({ ping: 1 });
    console.log("Koneksi ke database berhasil!");
  } catch (error) {
    console.log("Koneksi ke database gagal", error);
  }
  export const db = client.db(databaseName);