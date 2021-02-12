const config = require('./config');
const mysql = require('mysql');

const insertUserQuery = (name , email , phone) => {
    return `INSERT INTO user (name, email, phone) VALUES ('${name}','${email}', '${phone}')`;
}

module.exports.handleQueueMessage = ( queueName , {name , email , phone} ) => {

    const connection = mysql.createConnection({
      host: config.dbHost,
      user: config.dbUser,
      password: config.dbPassword,
      database: config.dbName
    });

    connection.connect();

    if (queueName == 'user') {
        connection.query(
            insertUserQuery(name , email , phone),
            (error) => {
                if (error) {
                    console.error(error);
                    throw error;
                }else{
                    console.log('New User Inserted ', {name , email , phone});
                }
          });
    }

};
