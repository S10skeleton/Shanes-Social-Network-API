const express = require('express');
const userRoutes = require('./routes/api/userRoute'); // Example path, adjust as needed
const thoughtRoutes = require('./routes/api/thoughtRoutes');
const connection = require('./config/connection');


const app = express();

app.use(express.json());
app.use('/api/users', userRoutes); // Ensure userRoutes is a valid router
app.use('/api/thoughts', thoughtRoutes); // Ensure thoughtRoutes is a valid router

connection.on('connected', () => {
    console.log('Mongoose connected to DB.');
  });
  
  connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
  
  connection.on('disconnected', () => {
    console.log('Mongoose disconnected from DB.');
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));