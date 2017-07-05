const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({text: ''}).then((result) => {
//   console.log(result);
// });


// Todo.findByIdAndRemove('595c3f4335425e2b7e9b4986').then((result) => {
//   console.log(result);
// });
//Todo.findOneAndRemove().then((result))
