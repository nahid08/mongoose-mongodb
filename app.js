// const { MongoClient, ObjectId } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// const dbName = "myProject";

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

// async function main() {

//     await client.connect();
//     console.log('successfully connected to server');
//     const db = client.db(dbName);
//     const collection = db.collection('documents');

//     return 'done';
// }

// main().then(console.log).catch(console.log).finally(() => client.close());

// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   if (err) {
//     console.log(err);
//     return console.log("unable to connect!");
//   }

//   console.log("connected correctly");
//   const db = client.db(dbName);

//   db.collection('users').insertOne({
//       name: 'Andrew',
//       age: 27
//   }, (err, res) => {
//       if(err) {
//           return console.log('unable to insert user');
//       }
//   })

//   db.collection('users').insertMany([
//       {
//           name: 'jen',
//           age: 28
//       },
//       {
//           name: 'gunther',
//           age: 27
//       }
//   ], (err, res) => {
//       if(err)
//       return console.log(err);

//       console.log(res);

//   })

//   db.collection("tasks").insertMany([
//     {
//       name: "java",
//       time: 8,
//     },
//     {
//       name: 'c++',
//       time: 10
//     },
//     {
//         name: 'python',
//         time: 12
//     }
//   ], (err, res) => {
//       if(err)
//       return console.log(err);

//       console.log(res);
//   });

//     db.collection('users').findOne({ name: 'jen'}, (err, user) => {
//         if(err) return console.log(err);
//         console.log(user);
//     })

//     db.collection('users').find({}).toArray((err, users) => {
//         if(err) {
//             return console.log(err);
//         }

//         console.log(users);
//     })

//     db.collection('users').updateMany({
//         name: 'jenny'
//     }, {
//        $inc: {
//            age: 1
//        }
//     }).then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

//     db.collection('users').deleteMany({
//         age: 27
//     }).then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })
// });

require('./mongoose')();
