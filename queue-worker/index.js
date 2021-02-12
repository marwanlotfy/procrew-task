const amqb = require('amqplib');
const { rabbitmqUrl , queueChannel } = require('./config');
const db = require('./db');

const startListin = async ( connection ) => {
    const channel = await connection.createChannel();
    await channel.assertQueue(queueChannel);
    channel.consume(queueChannel,function(msg) {
        if (msg !== null) {
          console.log(msg.content.toString());
          db.handleQueueMessage(queueChannel,JSON.parse(msg.content.toString()));
          channel.ack(msg);
        }
    })
}

amqb.connect(rabbitmqUrl).then(startListin).catch(console.error);
