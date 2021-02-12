const { enqueueNewUser } = require('./../queue/QueueManeger');

module.exports.persist = async (user) => {
   return await enqueueNewUser(user);
}
