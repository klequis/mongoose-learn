const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ace76fb4501c05fcf815078')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {returnOriginal: false}).then((result) => {
  //   console.log(result);
  // });
  //client.close();

  db.collection('Users').findOneAndUpdate({
                       // 5ace5a9b16604b3ef93ec65c
    _id: new ObjectID('5ace5a9b16604b3ef93ec65c')
  }, {
    $set: {
      name: 'Karl',
    },
    $inc: { age: 1 }
  }, {returnOriginal: false}).then((result) => {
    console.log(result);
  });
})
