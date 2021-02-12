require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    baseUrl:process.env.BASE_URL || 'http://localhost',
    rabbitmqUrl:process.env.RABBITMQ_URL || 'amqp://localhost',
    queueChannel:process.env.QUEUE_CHANNEL || 'user'
};
