const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const {MongoClient} = require("mongodb");

const app = express();
const dbURI = process.env.DB_HOST;

const port = process.env.PORT || 3000;

async function run (){
    const client = await new MongoClient(dbURI, { useUnifiedTopology: true }).connect();
    try {
        const result = await client.db("jobseek").collection("admins").find().toArray();
        console.log(result)
    }
    catch(err){

    }
}

run();

app.listen(port);