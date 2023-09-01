const express = require('express');
require("dotenv").config();
const router = require('./routes/usersRouter');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.CONNECTION_STRING
const port = process.env.PORT || 5000;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

const app = express();
app.use(express.json())


async function run() {
  try {
    await client.connect()

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    app.get('/', (req, res) => {
      res.send(`<h1>Welcome!</h1>`);
    })

    app.use('/api', router);


    // here operations
    app.listen(port, () => {
      console.log(`Server Running At Port: http://localhost:${port}`);
    })

  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
}
run()










