# car-dealership


const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
app.use(express.json());
const port = 5000;

// Connection URL
const url = 'mongodb+srv://mehwish:P4b9nLoXM3dkw7oh@cluster0.vb8kq9u.mongodb.net/mydb';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  // Connection successful, you can now work with the database
  const db = client.db('mydb');

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  // Close the MongoDB connection when the server is stopped
  process.on('SIGINT', () => {
    client.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
});
