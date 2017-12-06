module.exports = function(controller) {

  controller.on('hello', function(bot, message) {

    // a new session with an unknown user has begun
    bot.reply(message, 'Hello! I am a Botkit bot! Please configure me to do something useful.');

  });

  controller.on('welcome_back', function(bot, message) {

    // a known user has started a new, fresh session
//    bot.reply(message, 'Hello again. I still need to be configured.');

  });

  controller.on('reconnect', function(bot, message) {

    // the connection between the client and server experienced a disconnect/reconnect
    bot.reply(message, 'Some sub-space interference just caused our connection to be interrupted. But I am back now.');

  });
  
  controller.on('message_received', function(bot, message) {
    //bot.reply(message, 'I heard... something!');
  });
  
  controller.on('direct_message',function(bot,message) {
    // reply to _message_ by using the _bot_ object
    bot.reply(message,'You are talking directly to me');
  });


}
