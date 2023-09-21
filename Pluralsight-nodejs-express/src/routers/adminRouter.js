const express = require('express');
const debug = require('debug')('app:adminRouter');
const sessions = require('../data/sessions.json');

const { MongoClient } = require('mongodb');

const adminRouter = express.Router();

adminRouter.route('/').get((req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'globomantics';

    (async function mongodb() {
        let client;
        
        try {
            client = await MongoClient.connect(url);
            debug('Connected to the mongo DB');
      
            const db = client.db(dbName);
      
            const response = await db.collection('sessions').insertMany(sessions);
            res.json(response);
      

        }catch(err) {
            debug(err.stack);
        }
        client.close();
    }());
});

module.exports = adminRouter; 