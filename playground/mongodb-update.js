var {MongoClient, ObjectId} = require('mongodb');  // instead of above statement we can also use this...ES6 feature...

// var obj = new ObjectId();
//
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, client) => {

  if (err)
  return console.log('db is not connected');
  console.log('sucessfully connected');

//update....

/*
1.findOneAndUpdate => find one and update that record..
*/
const db = client.db('todoapp');

// db.collection('users').findOneAndUpdate({name:'ravi'},
//   {
//     '$set':{
//   name:'kumar'           //updating the record by using $set operator
// }
// },
// {
//   returnOriginal:false   //dont return original
// }).then((res) => {
//   console.log(res);
// });


//updating the age of a perosn

db.collection('users').findOneAndUpdate({name:'ram'},{
  '$inc':{
    age:1
  }
}, {
  returnOriginal:false
}).then((results) => {
  console.log(results);
}, (error) => {
  console.log(error);
});



  client.close();
});
