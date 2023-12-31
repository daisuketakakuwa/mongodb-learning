const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {
    auth: {
        username: "root",
        password: "password"
    }
});

// Database Name
const dbName = 'test';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const userCollection = db.collection('user');

    const findResult = await userCollection.find({}).toArray();
    console.log('Found documents =>', findResult);
    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());