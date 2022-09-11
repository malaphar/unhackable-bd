const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

// Db conf 
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded secret 
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Middleware for req handling 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static content
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

// Send to router
app.use(routes);

// Connects db and starts web server 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
