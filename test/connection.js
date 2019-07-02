const express=require('express');
const app =express();
const todoController=require('../controllers/todoController');


//setting up templating engine
app.set('view engine','ejs');
//setting up static file accessinility
app.use(express.static('./public'));

//fire controllers
todoController(app);

//setting up server port addres
app.listen(8080,()=>{
  console.log('listening on port 8080')
});
