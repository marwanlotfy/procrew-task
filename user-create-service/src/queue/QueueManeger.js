const amqb = require('amqplib');
const { rabbitmqUrl , queueChannel } = require('./../config');
module.exports.enqueueNewUser = async ({name , phone , email }) => {
    const connection = await amqb.connect(rabbitmqUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueChannel);
    console.table([{ name , email , phone }]);
    return  channel.sendToQueue(queueChannel,Buffer.from(JSON.stringify({ name , email , phone })));
}
