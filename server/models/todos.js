var mongoose = require('mongoose');


var todo= mongoose.model('todo',{ //here todo is collection name...

  text:{
    type:String,
    required:true,   // this tells that text should not empty they should give some values...
    trim:true,    // delets all extra spaces...
    minlength:1,
    maxlength:100

  },
  completed:{
    type:Boolean,
    default:false
  },
  completedat:{
    type:Number,
    default:null
  }
});


module.exports = {
  todo,
};
