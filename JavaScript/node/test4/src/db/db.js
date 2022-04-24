const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'testdb'

// connect
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', err=>{
  console.log('mongoose connect err: ', err);
})

db.once('open',()=>{
  console.log('mongoose running')
})

module.exports = mongoose