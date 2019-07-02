const mongoose=require('mongoose');


var todoSchema = new mongoose.Schema({
  items:Array
});

var Todo = mongoose.model('Todo',todoSchema);


module.exports=Todo;
