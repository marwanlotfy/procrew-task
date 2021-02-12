const amqb = require('amqplib');
const { rabbitmqUrl , queueChannel } = require('./config');
const db = require('./db');

const startListen = async ( connection ) => {
    try {
        const channel = await connection.createChannel();
        await channel.assertQueue(queueChannel);
        channel.consume(queueChannel,function(msg) {
            if (msg !== null) {
              console.log(msg.content.toString());
              db.handleQueueMessage(queueChannel,JSON.parse(msg.content.toString()));
              channel.ack(msg);
            }
        })
    } catch (err) {
        console.error(err)
    }
}
const startWorker = () => {
    amqb.connect(rabbitmqUrl).then(startListen).catch((err) => {
        console.warn('connection failure');
        console.log('attempt reconnection after 3 min ');
        setTimeout(() => startWorker() ,30000)
    });
}

startWorker();
