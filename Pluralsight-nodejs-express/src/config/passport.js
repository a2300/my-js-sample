const passport = require('passport');
require('./strategies/local.strategy')();

module.exports = function passportConfig(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        // null is for errors
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        // null is for errors
        done(null, user);
    });
};