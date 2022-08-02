const express = require('express');
const allRoutes = require('./controllers');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Requiring our models for syncing
//const { Traveller,Location,Trip} = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', allRoutes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
  });
}).catch(err=>{
  console.log(err)
});