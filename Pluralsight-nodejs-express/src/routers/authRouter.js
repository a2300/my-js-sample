const express = require('express');
const debug = require('debug')('app:authRouter');
const { MongoClient, ObjectId } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();

authRouter.route('/signUp').post((req, res) => {
    const { username, password } = req.body;

    const url = 'mongodb://localhost:27017';
    const dbName = 'globomantics';

    (async function addUser() {
        let client;
        try {
          client = await MongoClient.connect(url);
    
          const db = client.db(dbName);
          const user = { username, password };
          const results = await db.collection('users').insertOne(user);
          debug(results);

          const returnedUser = await db.collection('users').findOne({ _id: results.insertedId});
          debug(returnedUser);
          req.login(returnedUser, () => {
            res.redirect('/auth/profile');
          });
        } catch (error) {
          debug(error);
        }
        client.close();
      })();
    
 
});

authRouter
  .route('/signIn')
  .get((req, res) => {
    res.render('signin');
  })
  .post(
    passport.authenticate('local', {
      successRedirect: '/auth/profile',
      failureRedirect: '/',
    })
  );


authRouter.route('/profile').get((req, res) => {
    res.json(req.user);
});

module.exports = authRouter; 