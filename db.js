const dotenv = require('dotenv');
dotenv.config()
const mongodb = require('mongodb');

mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, (error, cliente) => {
    module.exports = cliente.db();
    const app = require('./app');
    app.listen(process.env.PORT);
});