var MongoClient = require('mongodb').MongoClient;





const uri = 'mongodb://klequis:n5MDcvljvOmkiBdM@intro-shard-00-00-5gwkl.mongodb.net:27017,intro-shard-00-01-5gwkl.mongodb.net:27017,intro-shard-00-02-5gwkl.mongodb.net:27017/test?ssl=true&replicaSet=intro-shard-0&authSource=admin'

const uriLocal = 'mongodb://localhost:27017'

//
MongoClient.connect(uriLocal, function(err, client) {
  // Paste the following examples here
  const db = client.db('iventory')

  db.collection('inventory').insertMany([
     // MongoDB adds the _id field with an ObjectId if _id is not present
    { item: "journal", qty: 25, status: "A",
       size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
    { item: "notebook", qty: 50, status: "A",
       size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
    { item: "paper", qty: 100, status: "D",
       size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
    { item: "planner", qty: 75, status: "D",
       size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
    { item: "postcard", qty: 45, status: "A",
       size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
  ])
  .then(function(result) {
    // process result
    console.log(result)
    client.close()
  })
  .catch((e) => {
    console.log('ERROR', e)
  })
})
