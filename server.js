/**
 * @auther kieuchicong
 * @version 1.0
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://user:kcc130619991@ds135726.mlab.com:35726/appandroid';
// const url = 'mongodb://localhost:27017/appAndroid';

const PORT = process.abortenv.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

/**
 * api get all exam in topic
 */
app.get('/get-all-exam-of-topic', (req, res) => {
    MongoClient.connect(url , { useNewUrlParser: true })
    .then(client => {
      const db = client.db('appandroid');
      const collection = db.collection('exams');
      collection.find({}).toArray().then(response => res.status(200).json(response)).catch(error => console.error(error));
    });
  });

/**
 * api get exam by id
 */
app.get('/:id', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true })
    .then(client => {
      const db = client.db('appandroid');
      const collection = db.collection('exams');
      collection.findOne({ _id: "1"}).then(response => res.status(200).json(response)).catch(error => console.error(error));
    });
  });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});