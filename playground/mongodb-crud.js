const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db)=>{
//     if(err)
//         console.log('unable to connect to MongoDB server.');
//     else{
//         db.collection('Users').find(
//             {age:34}
//         ).toArray()
//         .then( count =>{
//             console.log("num of items",count);
//         },err =>{
//             console.log(err);
//         });
//     }

//         db.close();
// });

const insertUser = (colName, docObj)=>{
    db.collection(colName).insertOne(docObj ,(err,result)=>{
        if(err)
            console.log('Something went wrong:',err)
        else{
            console.log(result.ops);
        }
    });
};

const listUsers = (colName)=> {
    db.collection(colName).find().toArray().then((result)=>{
        console.log(result);
    });
};



MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=>{
    if(err)
        console.log('unable to connect to MongoDB database.');
    else{
 
    }

    db.close();

});