const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://mehwish:P4b9nLoXM3dkw7oh@cluster0.vb8kq9u.mongodb.net/mydb';

// Exported collections

let db;

let conn = function()
{
  MongoClient.connect(url, {
    useNewUrlParser: true
}).then((client) => {
    console.log('Connected to MongoDB server');
     db = client.db('mydb');
 
    // Specify your collections here
    let users = db.collection('user') 
    // console.log(users)
   return  users
   

}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    throw error;
});
}

module.exports ={conn}

   
 
