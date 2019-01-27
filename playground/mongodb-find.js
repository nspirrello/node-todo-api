const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } ,(err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find().toArray().then((count) => {
        console.log(`Total count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({name: 'Nick'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    // client.close();
});