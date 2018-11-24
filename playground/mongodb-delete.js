var {MongoClient, ObjectId} = require('mongodb');  // instead of above statement we can also use this...ES6 feature...

// var obj = new ObjectId();
//
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, client) => {

  if (err)
  return console.log('db is not connected');
  console.log('sucessfully connected');


//delete.........................

/*
1. deleteMany => delete every document when it matches the conditions..
2. deleteOne => delete first record which matches the condition and then breaks up..
3. findOneAndDelete => find the first record and delete the finded record. But the differences is it will return the
                        deleted record in the results object we can also use that for our purpose...


*/

  const db = client.db('todoapp');

  // db.collection('users').deleteMany({name:'ram'}, (err, res) => {
  //   if (err)
  //   return console.log('cant deleteMany');
  //   else {
  //     console.log('sucessfully');
  //   }
  //
  // });

  db.collection('users').findOneAndDelete({name:'ravi'}).then((res)=>{ // then is promises
    console.log(res);
  }, (error)=>{
    console.log('sorry');
  });
  db.close();
});
