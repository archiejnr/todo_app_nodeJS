const bodyParser=require('body-parser');

var urlencodedParser=bodyParser.urlencoded({extended:false});


var data=[{item:'hit the gym'},{item:'start coding'},{item:'go to work'}];


module.exports=(app)=>{

  app.get('/',(req,res)=>{
    res.render('todo',{todos:data});
  });

  app.post('/todo',urlencodedParser,(req,res)=>{
    data.push(req.body);
   //res.json(data);
  res.render('todo',{todos:data});
  });

  app.delete('/todo',(req,res)=>{

  });
};
