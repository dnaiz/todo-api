const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db)=>{
    if(err)
        console.log('unable to connect to MongoDB server.');
    else{
        //console.log('Connected to MongoDB server successfully.');
        // db.collection('Todos').insertOne({text:"Learn NodeJS",completed:false},(err, result)=>{
        //     if(err)
        //         console.log('unable to insert document', err);
        //     else{
        //         console.log(result.ops);
        //     }
        // });

        // db.collection('Users').insertOne({
        //     name:'abady',
        //     age:34,
        //     location:'Ontario'
        // },(err,result)=>{
        //     if(err)
        //         console.log('unable to insert new user to database', err);
        //     else
        //         console.log(result.ops)
        // });
        console.log(db.collection('Users').find());
    }

        db.close();
});
