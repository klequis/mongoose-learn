const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect MongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('blog')
  post = {
    title: 'My Blog Post',
    content: "Here's my blog post.",
    date: new Date()
  }

  db.insert(post)

  client.close()
})
