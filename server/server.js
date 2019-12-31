const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

// const Todo = mongoose.model('Todo',{
//     text:{
//         type:String,
//         required:true,
//         minLength:1

//     },
//     completed:{
//         type:Boolean,
//         default:false,
//     },
//     completedAt:{
//         type:Number,
//         default:null
//     }
// });

// let newTodo = new Todo({
//     text:'write validations'
// });

// newTodo.save().then((doc)=>{
//     console.log('saved todo',doc);
// },(err)=>{
//     console.log('unable to save todo',err);
// });

// const otherTodo = new Todo({
//     text:'buy winter clothes',
//     completed:false,
//     completedAt:0
// });

// otherTodo.save().then((doc)=>{
//     console.log('todo saved successfully',doc);
// },(err)=>{
//     console.log('unable to save',err)
// })

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        minLength:5
    },
    age:{
        type:Number,
        required:true
    }
});

const newUser = new User({
    name:'abady',
    age:34,
});

newUser.save().then((doc)=>{
    console.log('user saved successfully',doc);
},(err)=>{
    console.log('unable to save user', err);
})