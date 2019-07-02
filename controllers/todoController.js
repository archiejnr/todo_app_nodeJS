const bodyParser=require('body-parser');
const mongoose=require('mongoose');
var urlencodedParser=bodyParser.urlencoded({extended:false});
const Todo =require('../models/todos');
//var data=[{item:'hit the gym'},{item:'start coding'},{item:'go to work'}];

mongoose.connect('mongodb+srv://testUser:testUser@cluster0-inhfi.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
//setting the blueprint for my data
/*var todoSchema = new mongoose.Schema({
  items:Array
});

var Todo = mongoose.model('Todo',todoSchema);*/
/*var itemone=Todo({item:"one two testing"}).save((err)=>{
  if(err) throw err;
  console.log('item saved');
});

var itemTwo=Todo({item:'this is another one'}).save((err)=>{
  if(err) throw err;
  console.log(`${itemTwo}`);
});
*/
module.exports=(app)=>{

  app.get('/',(req,res)=>{
    //get data from mongodb and pass it to view
    Todo.findOne({name:'Todo List'},(err,data)=>{
      if(err) throw err;
      res.render('todo',{todos:data.items});
    });
  });

  app.post('/todo',urlencodedParser,(req,res)=>{
    //get data from the view and add it to mongodb
    Todo.findOne({name:'Todo List'}).then((result)=>{
      var todo=result.items;
      todo.push(req.body.item);
      console.log(req.body);
      result.items=todo;
      result.save((err,data)=>{
          if(err) throw err;
          res.render('todo',{todos:data.items})
        });
    })

  /*  var newTodo=Todo(req.body).save((err,data)=>{
      if(err) throw err;
      res.render('todo',{todos:data})
    });*/
  });

  app.delete('/todo/:item',(req,res)=>{
    //remove data from the database
    Todo.find({item:req.params.item.replace(/\-/g,' ')}).remove((err,data)=>{
      if(err) throw err;
      res.render('todo',{todos:data});
    });
    
    Todo.findOne({name:'Todo List'}).
  });
};
