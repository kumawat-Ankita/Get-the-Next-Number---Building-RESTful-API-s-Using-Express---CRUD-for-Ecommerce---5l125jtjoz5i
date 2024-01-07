const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num', (req, res) => {
  const { num } = req.body;

  // Check if 'num' exists in the request body and is a valid integer
  if (num === undefined || !Number.isInteger(num)) {
    return res.status(200).json({ message: 'Invalid number or no number provided', status: 'success' });
  }

  // Calculate the next number
  const nextNumber = num + 1;

  // Send the response with the next number and status of success
  res.status(200).json({ message: nextNumber, status: 'success' });
});


module.exports = app;
