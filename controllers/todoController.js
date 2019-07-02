const bodyParser=require('body-parser');
const mongoose=require('mongoose');
var urlencodedParser=bodyParser.urlencoded({extended:false});
const Todo =require('../models/todos');

mongoose.connect('mongodb+srv://testUser:testUser@cluster0-inhfi.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

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
      result.items=todo;
      result.save((err,data)=>{
          if(err) throw err;
          res.render('todo',{todos:data.items})
        });
    })
  });

  app.delete('/todo/:item',(req,res)=>{
    //remove data from the database
Todo.findOne({name:'Todo List'}).then((result)=>{
  var newArray=result.items.filter((item)=>{
    return item!==req.params.item.replace(/\-/g,' ');
  });
  result.items=newArray;
  result.save().then((data)=>{
    res.render('todo',{todos:data.items})
  }).catch(()=>{
    console.log('could not save');
  })
})
  });
};
