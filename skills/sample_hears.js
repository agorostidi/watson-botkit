module.exports = function(controller) {

  
  controller.hears('tacos','message_received', function(bot, message) {

    bot.startConversation(message, function(err, convo) {
      convo.say('Oh boy, taco time!');
      convo.ask('What type of taco do you want?', function(answer, convo) {
        var taco_type = answer.text;
        // do something with this answer!
        // storeTacoType(convo.context.user, taco_type);
        convo.say('YUMMMM!!!'); // add another reply
        convo.next(); // continue with conversation
      });
    });
  });

  controller.hears('test','message_received', function(bot, message) {

    bot.reply(message,'I heard a test');

  });

  controller.hears('typing','message_received', function(bot, message) {

    bot.reply(message,{
      text: 'This message used the automatic typing delay',
      typing: true,
    }, function() {

      bot.reply(message,{
        text: 'This message specified a 5000ms typing delay',
        typingDelay: 5000,
      });

    });

  });

}
