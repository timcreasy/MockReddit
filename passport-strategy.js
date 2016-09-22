const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser((id, done) => {
  User.findOne({"_id": id}, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Email not registered' });
      }
      bcrypt.compare(password, user.password, function(err, valid) {
          if (err) {
            return done(err);
          }
          if (!valid) {
            return done(null, false, { message: 'Incorrect password'})
          } else {
            return done(null, user);
          }
      });
    });
  }
));