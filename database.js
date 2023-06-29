const { MongoClient } = require('mongodb');

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
      _db = client.db('gesttion-clientes');
      callback();
    })
    .catch((error) => {
      console.log('Error al conectarse a MongoDB:', error);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No se ha podido establecer una conexión con MongoDB';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
