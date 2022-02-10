/**
 * @description mongoose link database
 *
 */

const mongoose = require('mongoose');

// 配置文件
const config = {
  url: 'mongodb://admin:root777@localhost:27017',
  dbName: 'admin',
};

// 配置
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);


// 连接
mongoose.connect(`${config.url}/${config.dbName}`, {
  authSource: config.dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 连接对象
let db = mongoose.connection;
db.on('error', error => {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect(); // Trigger disconnect on any error
});

db.once('open', () => {
  console.log('open');
});

module.exports = mongoose;
