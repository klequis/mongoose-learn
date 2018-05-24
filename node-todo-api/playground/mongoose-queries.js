const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const chalk = require('chalk')
const { ObjectID } = require('mongodb')

// var id = '5ad134a43b18c9382be747e8'

// Todo.find({_id: id}).then((todos) => {
//   console.log('find', todos)
// })
//
// Todo.findOne({_id: id}).then((todo) => {
//   console.log('findOne', todo);
// })

// if(!ObjectID.isValid(id)) {
//   console.log(chalk.red('Id not valid'));
// }

// Todo.findById(id).then((todo) => {
//   console.log(!todo)
//   if (!todo) {
//     return console.log(chalk.blue('findById, Id not found'))
//   }
//   console.log(chalk.blue('findById, Todo By Id'), todo)
// }).catch((e) => console.log(chalk.red(e)))
