// const mongoclient = require('mongodb').MongoClient;


var {MongoClient, ObjectId} = require('mongodb');  // instead of above statement we can also use this...ES6 feature...

// var obj = new ObjectId();
//
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, client) => {

  if (err)
  return console.log('db is not connected');
  console.log('sucessfully connected');

  const db = client.db('todoapp');

  // db.collection('todo').insertOne({           // todo is a collection name like table name in SQL
  //   text:'some text',
  //   completed:false,
  // }, (err, results) => {
  //   if (err)
  //   return console.log('cannot able to write', err);
  //   console.log(JSON.stringify(results.ops, undefined, 2));
  // });

  db.collection('users').insertOne({
    name:'ravi',
    age:18,
    location:'karur',
    // _id:1,
  }, (err, results) => {
    if (err)
    return console.log('cannot able to write',err);
      console.log(JSON.stringify(results.ops[0]._id));       // results.ops will store the recent record which we inserted...
  });



  client.close();
});
