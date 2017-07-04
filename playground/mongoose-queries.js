const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5959b27083bc1f30f05adfb2";


// if (!ObjectID .isValid(id)) {
//   console.log('ID not valid');
//   return;
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch(e => console.log(e));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log('User: ', user);
}).catch(e => console.log(e));
