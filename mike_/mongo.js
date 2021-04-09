//https://www.youtube.com/watch?v=bxsemcrY4gQ for schema in js
const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const app = express();

async function main() {
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
    const uri = "mongodb+srv://mike:Hamster1@ses1a.kdj8l.mongodb.net/eLMS?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();
    
        await listDatabases(client);

       // await borrowBook(client);
     
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    //books = await client.db().books().listBook();

    console.log("Databases:");

    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    }

async function borrowBook(client){
    client.db().collection("Books").findOne({}, function(err, result){
        if (err) throw err;
        console.log(result.name);
    })

}

async function listBook(client){
    // const bookTitle = window.prompt("Enter book title: ");
    // const book = await client.db().collection('Books').find({ title: bookTitle });
    // alert("Your book is " + book);
    // return book;
    const books = db.collection('title').find({});
}
 
