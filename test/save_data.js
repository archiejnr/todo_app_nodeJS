const assert=require('assert');
const Todo=require('../models/todos');


describe('test data server communication',()=>{

  //deleting data from an array in the data base
 it('finds and deletes data in the db',(done)=>{
    Todo.findOne({name:'Todo List'}).then((result)=>{
      var array=result.items.filter((item)=>{
        return item!=='go to school'
      });
      result.items=array;
      result.save().then(()=>{
        assert(result.items.length===array.length)
      });
    }).catch(()=>{
      console.log('something wrong with this test');
    })
    done();
  });
  /*
    //finding data in the db
  it('finds data in the database',(done)=>{
    Todo.findOne({name:'Todo List'}).then((result)=>{
      console.log(result)
      assert(result!==undefined);
    }).catch(()=>{
      console.log('there was an error for test 1');
    })
    done();
  });*/
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

  //

})
