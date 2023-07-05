const express = require('express');
const db = require('./db/index');
const { handleNotFound } = require('./utils/helper');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();
const userRouter = require('./routes/user');
const packageRouter = require('./routes/package');

const PORT = process.env.PORT || 5000;

// Api bata ako data lai json format ma lana ko lagi middeware
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/package', packageRouter);

app.use('/*', handleNotFound);

app.use((err, req, res, next) => {
  console.log('Error:', err);
  res.status(500).json({ error: err.message || err });
});

//user.hasMany(packageorder) do it later

app.listen(PORT, () => {
  console.log(`Server is running in PORT: ${PORT}`);
});
