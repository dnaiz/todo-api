const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db)=>{
    if(err)
        console.log('unable to connect to MongoDB server.');
    else{
        db.collection('Users').find(
            {age:34}
        ).toArray()
        .then( count =>{
            console.log("num of items",count);
        },err =>{
            console.log(err);
        });
    }

        db.close();
});
