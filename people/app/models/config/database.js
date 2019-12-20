const url = require('./url');
const mongoose = require('mongoose');

const conn = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 5,
    socketTimeoutMS: 0,
    connectTimeoutMS: 0
});

conn.on('connecting', () => console.log('DATABASE: Connecting'));
conn.on('connected', () => console.log('DATABASE: Connected'));
conn.on('disconnected', () => console.log('DATABASE: Disconnected'));
conn.on('reconnected', () => console.log('DATABASE: Reconnected'));

module.exports = conn;