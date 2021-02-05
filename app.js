// Import Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routers/auth');
const adminRoutes = require('./routers/admin');

// Local Server
const MONGODB_URI ='mongodb://127.0.0.1:27017/UrlShort';
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(authRoutes);

const port = process.env.PORT || 3000 ;

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
