const express = require('express');
const app = express();
require('dotenv').config();
const userRouter = require('./routes/user');

const PORT = process.env.PORT || 5000;

app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running in PORT: ${PORT}`);
});

console.log('Hello darkness my old friend');
