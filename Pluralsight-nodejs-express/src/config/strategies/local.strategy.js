const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient, ObjectId } = require('mongodb');
const debug = require('debug')('app:local.strategy');

module.exports = function localStrategy() {
    passport.use(
      new Strategy(
        {
          usernameField: 'username',
          passwordField: 'password',
        },
        (username, passport, done) => {
          const url = 'mongodb://localhost:27017';
          const dbName = 'globomantics';
          (async function validateUser() {
            let client;
            try {
              client = await MongoClient.connect(url);
              debug('Connected to the mongo DB');
  
              const db = client.db(dbName);
  
              const user = await db.collection('users').findOne({ username });
  
              if (user && user.password === password) {
                done(null, user);
              } else {
                done(null, false);
              }
            } catch (error) {
              done(error, false);
            }
            client.close();
          })();
  
        }
      )
    );
};  