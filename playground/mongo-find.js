var {MongoClient, ObjectId} = require('mongodb');  // instead of above statement we can also use this...ES6 feature...

// var obj = new ObjectId();
//
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, client) => {

  if (err)
  return console.log('db is not connected');
  console.log('sucessfully connected');


  const db = client.db('todoapp');

  // db.collection('users').find().toArray((err, res) => {
  //   if (err)
  //   return console.log('unable to fetch',err);
  //   console.log(JSON.stringify(res, undefined, 2));
  // });


  // db.collection('users').find({location:'karur', name:'ram'}).toArray().then((res) => { //specify multiple conditions
  //   console.log(JSON.stringify(res, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fectch',err);
  // });


// the above both are done the same task follow any one of those...

db.collection('users').find({_id:new ObjectId('5bf95c6247fa2e1673eb7326')}).toArray().then((res) => { //getting through id...
  console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
  console.log('unable to fectch',err);
});

db.collection('users').find({location:'karur'}).count().then((count) => { //getting through id...
  console.log('the values are',count);
}, (err) => {
  console.log('unable to fectch',err);
});


  client.close();

});
