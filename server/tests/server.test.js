const expect = require('expect');
const request = require('supertest');

const {app} = require('../server');
const {Todo} = require('../models/todo');


const obj = {text:'go to the company'};

beforeEach((done)=>{
    Todo.remove({}).then(()=> done());
});

describe('post request', ()=>{
    // it('should send a todo',(done)=>{
    //     request(app)
    //     .post('/todos')
    //     .send(obj)
    //     .expect((res)=>{
    //         console.log('response:\n',res.body);
    //         expect(res.body).toInclude(obj);

    //     })
    //     .expect(200)
        
    //     .end((err, res)=>{
    //         if(err)
    //             done(err);
    //         else{
    //         Todo.find()
    //         .then((todos)=>{
    //             console.log('todos:\n',todos);
    //             expect(todos[0]).toInclude(obj);
    //             done();
    //         }).catch((err)=>{done(err);});
    //         }
            
    //     });
    // });

    it('should return 404', (done)=>{
        request(app)
        .post('/todos')
        .send({text:'go to our house'})
        .expect(200)
        .expect((res)=>{
            console.log('bad response: ',res.body)
        })
        .end(done)

    });
});

