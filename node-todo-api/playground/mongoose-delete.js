const { ObjectID } = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {user} = require('./../server/models/user')

Todo.findByIdAndRemove('5ad239894501c05fcf827df1').then((result) => {
  console.log(result);
});


Todo.findOneAndRemove({_id: '57c4670dbb35fcbf6fda1154'}).then((todo) => {
});
