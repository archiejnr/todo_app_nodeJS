const assert=require('assert');
const Todo=require('../models/todos');


describe('test data server communication',()=>{

  beforeEach(()=>{
    Todo.findOne({name:'Todo List'}).then((result)=>{
      for(i=0;i<result.items.length;i++){
        result.items.pop();
      }
      }).catch(()=>{
        console.log('there was a problem clearing');
      })
    });
    //finding data in the db
  it('finds data in the database',(done)=>{
    Todo.findOne({name:'Todo List'}).then((result)=>{
      console.log(result)
      assert(result!==undefined);
    }).catch(()=>{
      console.log('there was an error for test 1');
    })
    done();
  });
  //adding data to the db
  /*it('adds things to the array property',(done)=>{
    Todo.findOne({name:'Todo List'}).then((result)=>{
      var initLength=result.items.length
      var todo=result.items;
      todo.push('go to school');
      result.items=todo;
      result.save().then(()=>{
        assert(initLength<result.items.length);
      })
    }).catch(()=>{
      console.log('there was an error for test 2');
    });
    done();
  });*/
  //deleting data from the database
  /*it('deletes data from the database',(done)=>{
    Todo.findOne({name:'Todo List'}).then((result)=>{
      for(i=0;i<result.items.length;i++){
        result.items[i].pop();
      }
    }).catch(()=>{
      console.log('nothing could be deleted');
    });
    done();
  })*/

})
