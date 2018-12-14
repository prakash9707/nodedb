const {mongoose} = require('./../server/db/mongoose');

const {todo} = require('./../server/models/todos');

const {ObjectId} = require('mongodb');

const {users} = require ('./../server/models/users'); // {obj} => refers to particular portion in a file..

// but if you give id like this '5c0e0a1df0c4ejkjkjhjhb661613d2d8' this is invalid id so it returns error..
let id = '5bfa4f6be409e4ee26b086e9' ;
if (ObjectId.isValid(id)){  // isValid is a function that is availabe in mongodb library..
users.find({
  _id:id           // this is a valid id but if it is not in collection the result will be  []..
}).then((result) => {
  if (!result) console.log('Invalid');
  else console.log(result);
}).catch((e) => console.log("incorrect syntax"));
}
else{console.log('error');}
