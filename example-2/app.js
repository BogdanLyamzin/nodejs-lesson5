const dotenv = require("dotenv");
dotenv.config();
const {ObjectID, MongoClient} = require("mongodb");

async function run(){
    const DB_HOST = process.env.DB_HOST;

    const client = await new MongoClient(DB_HOST, {
        useUnifiedTopology: true
    }).connect();

    try {
        // const results = await client.db("books_shop").collection("authors").find().toArray();
        // const {ops: [newAuthor]} = await client.db("books_shop").collection("authors").insertOne({name: "Alex"});
        /*
        res.json({
            status: "success",
            code: 201,
            data: newAuthor
        })
        */
       // const {id} = req.params;
       const objectId = new ObjectID("6053a696e9848a3cdc397e85");
       const {value: updateAuthor} = await client.db("books_shop").collection("authors").findOneAndUpdate({_id: objectId },{$set: {name: "Anna"}}, {returnOriginal: false});
       console.log(updateAuthor);
    }
    catch(err) {
        console.log(err)
    }

}

run();