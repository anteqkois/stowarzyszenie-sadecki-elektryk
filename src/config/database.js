//const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const dbname = process.env.DB_NAME;
const url = `mongodb://localhost:27017/${dbname}`;

const database = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

module.exports = database;






//const database = mongoClient.connect(url, {}, (error, client)=>{
//    if(error){
//        console.log('Can not connect to the database');
//    }
//    
//    const db = client.db(dbname);
//
//    const databasePosts  = db.collection('posts');
//
//    //users
//
//    //databasePosts.insertOne({
//    //    title: 'TEST 4 post to test',
//    //    date: '13.03.2025',
//    //    description: ' TEST laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ////minim veniam.'
//    //}, (error, result)=>{
//    //    if(error){
//    //        console.log('Adding post error', error);
//    //    }
//    //    console.log(result.ops);
//    //})
//
//    //databasePosts.find({
//    //    title: "TEST 4 post to test"
//    //}).toArray((error, results) =>{
//    //    console.log(results);
//    //})
//
//    console.log('You connect to the edatabase !');
//    return db;
//
//})
