const express = require('express');
const app = express();
require('dotenv').config();
const userRouter = require('./routes/user');

const PORT = process.env.PORT || 5000;

app.use('/api/user', userRouter);

const db = require('./db/index');
db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running in PORT: ${PORT}`);
});

console.log('Hello darkness my old friend');
