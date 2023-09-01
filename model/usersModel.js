const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://compassUser:tfArl68aHuTr8LIq@cluster0.kcr8r.mongodb.net/'

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})


const db = client.db('allUsers');
const db2 = client.db('manuProducts')

const userCollection = db.collection('users');
const menuCollection = db2.collection('everyItems')

module.exports = {
  userCollection,
  menuCollection
};