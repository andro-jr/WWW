const express = require('express');

const app = express();
require('dotenv').config();
const userRouter = require('./routes/user');

const PORT = process.env.PORT || 5000;

// Api bata ako data lai json format ma lana ko lagi middeware
app.use(express.json());

app.use('/api/user', userRouter);

const db = require('./db/index');

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running in PORT: ${PORT}`);
});
