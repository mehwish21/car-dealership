


const express = require('express');
const { MongoClient } = require('mongodb');
const route = require('./routes/route.js');
const app = express();
app.use(express.json());
const port = 5000;
const UserSchema = require('./models/userModel')

// Connection URL
// const url = 'mongodb+srv://mehwish:P4b9nLoXM3dkw7oh@cluster0.vb8kq9u.mongodb.net/mydb';

// MongoClient.connect(url, {
//     useNewUrlParser: true
// }).then((client) => {
//     console.log('connected to mongodb server');


//   // Connection successful, you can now work with the database
//   const db = client.db('mydb');
//   const users = db.collection('user')
   
 
  
//  app.get('/users', (req, res) => {
//     users
//         .find({})
//         .toArray()
//         .then((result) => {
//             res.status(200).json({
//                 success: true,
//                 data: result,
//             });
//         }); 
// });

// //=======================================================

// app.post('/createusers', (req, res) => {
//     const { user_email, user_location, user_info, password, vehicle_info } = req.body;
  
//     // Validate the request body against the UserSchema
//     const validationResult = validateUserSchema(req.body);
//     console
//     if (!validationResult.isValid) {
//       return res.status(400).json({
//         success: false,
//         message: validationResult.message
//       });
//     }
  
//     // Create a new user object
//     const newUser = {
//       user_email,
//       user_location,
//       user_info,
//       password,
//       vehicle_info
//     };
  
//     // Insert the new user into the users collection
//     users.insertOne(newUser)
//       .then(() => {
//         res.status(201).json({
//           success: true,
//           message: 'User created successfully.'
//         });
//       })
//       .catch((error) => {
//         console.error('Error creating user:', error);
//         res.status(500).json({
//           success: false,
//           message: 'An error occurred while creating the user.'
//         });
//       });
//   });
  
//   // Helper function to validate the user schema
//   function validateUserSchema(data) {
//     for (const field in UserSchema) {
//       if (UserSchema.hasOwnProperty(field) && UserSchema[field].required && !data[field]) {
//         return {
//           isValid: false,
//           message: `${field} is required.`
//         };
//       }
//     }
  
//     return {
//       isValid: true,
//       message: ''
//     };
//   }
//   // Close the MongoDB connection when the server is stopped

    
// }).catch(console.error);

app.use('/', route);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

