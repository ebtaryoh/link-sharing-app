// lib/mongodb.ts
import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI!;

const options: MongoClientOptions = {
  // No additional options needed for newer MongoDB drivers
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to avoid multiple connections
  let globalClient: MongoClient;
  clientPromise = (global as any)._mongoClientPromise || (global as any)._mongoClientPromise = MongoClient.connect(uri, options).then((client) => {
    globalClient = client;
    return client;
  });
} else {
  // In production mode, create a new connection each time
  clientPromise = MongoClient.connect(uri, options);
}

export default clientPromise;
