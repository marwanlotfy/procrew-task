require('dotenv').config();

module.exports = {
    rabbitmqUrl:process.env.RABBITMQ_URL || 'amqp://localhost',
    queueChannel:process.env.QUEUE_CHANNEL || 'user',
    dbHost:process.env.DATABASE_HOST || 'localhost',
    dbUser:process.env.DATABASE_USER || 'root',
    dbPassword:process.env.DATABASE_PASSWORD || '12345678',
    dbName:process.env.DATABASE_NAME || 'user_repository'
};
