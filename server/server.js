var {mongoose} = require('./db/mongoose.js');

var {todo} = require('./models/todos.js');

var {users} = require('./models/users.js');

const {ObjectId} = require('mongodb');

var express = require('express');

var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());                  //middle ware sending json data to express

// app.post('/users', (req, res) => {
//
//   let usermodel = new users({
//     email:req.body.email                 //req.body is a whole json object in that we are taking only email property..
//   });
//
//   usermodel.save().then((result) => {
//     res.send(result);
//   }, (err) => {
//     res.status(400).send(err);
//   });
// });

app.post('/todos', (req, res) => {

  let todomodel = new todo({
    text:req.body.text
  });

  todomodel.save().then((result) => {
    res.send(result);
    // console.log('fine');
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  todo.find({}).then((result) => {
    console.log(result);
    res.send({result});  //javascript es6 feature obj will like result: values of result...
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (ObjectId.isValid(id)){
    users.find({
      _id:id
    }).then((result) => {
      if (!result)
      res.send(result);
      else {
        res.status(400).send({
          msg:'id is not in db'
        });
      }
    })

  }
  else{
    console.log("invalid id");
    res.send({
      error:'Invalid id'
    });
  }

});


app.listen(3000, () => {
  console.log('server is ready');
});


module.exports = {
  app,
};
