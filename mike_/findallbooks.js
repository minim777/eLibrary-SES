const { MongoClient } = require("mongodb");

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

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'To Kill a Mockingbird' };
    const book = await books.findOne(query);

    console.log(book);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);