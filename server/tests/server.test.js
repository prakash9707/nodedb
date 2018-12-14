const expect = require('expect');
const request = require('supertest');
const express = require('express');
const {app} = require('./../server');
const {users} = require('./../models/users');  // "../" is used to come back.........
const {todo} = require('./../models/todos');


const values = [
  {
    text:'getting todo'
  },{
    text:'getting todo1'
  }
];



 beforeEach((done) => {                //deletes every record in todo collection..........
   todo.remove({}).then(() => {
    todo.insertMany(values);
   }).then(() => done());
 });


describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';
    // console.log('mytest');

    request(app)
      .post('/todos')
      .send({text}) // supertest will convert this to json data
      .expect(200)
      .expect((res) => {
        // console.log("my data",res.body.text);
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        todo.find().then((todos) => {
          expect(todos.length).toBe(3);
          expect(todos[2].text).toBe(text);
          done();
        }).catch((e) => done(e));
  });
});
});

describe('GET /todos', () => {
  it('should return correctly', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
      expect(res.body.result.length).toBe(2);
    })
    .end(done);
  });
});
