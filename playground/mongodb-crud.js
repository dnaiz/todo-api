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

const listUsers = (db,colName)=> {
    db.collection(colName).find().toArray().then((result)=>{
        console.log(JSON.stringify(result, undefined, 2));
    });
};

const updateOne = (db, colName, updateObj, obj)=>{
    db.collection(colName).findOneAndUpdate(obj, updateObj).then((result)=>{
        console.log(result);
    },(err)=>{})
};



MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=>{
    if(err)
        console.log('unable to connect to MongoDB database.');
    else{
        // db.collection('users').findOneAndUpdate({
        //     _id:new ObjectID('5e0744ff1152c866427ccdd9')},{
                // $set:{
                //     name:'Anwar',
                //     age:30,
                //     location:'NY'
                // },
            //     $inc:{
            //         age:1
            //     }
            // }).then((result)=>{
                
            // },(err)=>{})
        // db.collection('users').find().toArray().then((result)=>{
        //     console.log(JSON.stringify(result, undefined, 2));
        // },()=>{})
           listUsers(db,'users');
            
    }

    db.close();

});