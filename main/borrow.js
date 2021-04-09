const { MongoClient } = require("mongodb");
const app = require("express");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://mike:Hamster1@ses1a.kdj8l.mongodb.net/eLMS?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db('eLMS');
    const books = database.collection('Books');

    // Query for a book
    const query = { title: 'To Kill a Mockingbird' };
    const book = await books.findOne(query);

    console.log(book);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
function borrowBook(title) {
    const database = client.db('eLMS');
    const books = database.collection('Books');
    document.getElementById("p1").innerText = "swag";
    try {
        const query = { title: title };
        const book = await books.find(query);
        document.getElementById("p1").innerHTML = book;
    }
    catch(e) {
        console.error(e);
    }
}
run().catch(console.dir);