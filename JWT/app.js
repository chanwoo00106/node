const express = require('express');
const tokenRouter = require('./routes/token');

const app = express();


app.use('/token', tokenRouter);

app.listen(8000)