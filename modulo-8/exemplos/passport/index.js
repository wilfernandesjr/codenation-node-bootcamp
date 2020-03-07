const express = require('express');
const passport = require('passport');
const Strategy = require('passport-http').BasicStrategy;
const db = require('./db');

passport.use(new Strategy((username, password, cb) => {
  db.users.findByUsername(username, (err, user) => {
    if (err) { return cb(err); }
    if (!user) { return cb(null, false); }
    if (user.password != password) { return cb(null, false); }
    return cb(null, user);
  });
}));

const app = express();

app.get('/', passport.authenticate('basic', { session: false }), (req, res) => {
  res.json({ username: req.user.username, email: req.user.emails[0].value });
});

app.listen(3000);
