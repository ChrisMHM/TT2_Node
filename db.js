const mongodb = require('mongodb');

const connectionString = 'mongodb+srv://rootTT2:Tkb1$@cluster0-xk4om.mongodb.net/FissureDetector?retryWrites=true&w=majority';
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (error, cliente) => {
    module.exports = cliente.db();
    const app = require('./app');
    app.listen(4000);
});