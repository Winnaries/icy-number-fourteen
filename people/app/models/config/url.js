
const db_ip = process.env.DATABASE_IP || 'localhost';
const db_port = process.env.DATABASE_PORT || '27017';
const db_user = process.env.DATABASE_USER || 'lemon';
const db_pass = process.env.DATABASE_PASS || '12345';
const db_auth = process.env.DATABASE_AUTH || 'admin';

const url = `mongodb://${db_user}:${db_pass}@${db_ip}:${db_port}/${db_auth}`;

module.exports = url;


