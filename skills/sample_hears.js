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
  
  controller.hears('ambient','message_received',function(bot,message) {

    // do something...

    // then respond with a message object
    //
    bot.reply(message,{
      text: "A more complex response",
      username: "ReplyBot",
      icon_emoji: ":dash:",
    });
    
     var reply_with_attachments = {
      'username': 'My bot' ,
      'text': 'This is a pre-text <strong>bold</strong> <a href="http://lorempixel.com/48/48/">a</a> <img src="http://lorempixel.com/48/48/" /> <iframe width="560" height="315" src="https://www.youtube.com/embed/1REwHGEN84k" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>',
      'attachments': [
        {
          'fallback': 'To be useful, I need you to invite me in a channel.',
          'title': 'How can I help you?',
          'text': 'To be useful, I need you to invite me in a channel ',
          'color': '#7CD197'
        }
      ],
      'icon_url': 'http://lorempixel.com/48/48'
      }

    bot.reply(message, reply_with_attachments);

})

  
  // Log every message recieved
controller.middleware.receive.use(function(bot, message, next) {

  // log it
  console.log('RECEIVED: ', message);

  // modify the message
  message.logged = true;

  // continue processing the message
  next();

});
  
  
  // Log every message sent
controller.middleware.send.use(function(bot, message, next) {

  // log it
  console.log('SENT: ', message);

  // modify the message
  message.logged = true;

  // continue processing the message
  next();

});
  
  controller.hears('open the (.*) doors',['message_received'],function(bot,message) {
  var doorType = message.match[1]; //match[1] is the (.*) group. match[0] is the entire group (open the (.*) doors).
  if (doorType === 'pod bay') {
    return bot.reply(message, 'I\'m sorry, Dave. I\'m afraid I can\'t do that.');
  }
  return bot.reply(message, 'Okay');
});
  
  
  controller.hears(['question me','preguntame'], 'message_received', function(bot,message) {

  // start a conversation to handle this response.
  bot.startConversation(message,function(err,convo) {

    convo.addQuestion('Shall we proceed Say YES, NO or DONE to quit.',[
      {
        pattern: 'done',
        callback: function(response,convo) {
          convo.say('OK you are done!');
          convo.next();
        }
      },
      {
        pattern: bot.utterances.yes,
        callback: function(response,convo) {
          convo.say('Great! I will continue...');
          // do something else...
          convo.next();

        }
      },
      {
        pattern: bot.utterances.no,
        callback: function(response,convo) {
          convo.say('Perhaps later.');
          // do something else...
          convo.next();
        }
      },
      {
        default: true,
        callback: function(response,convo) {
          // just repeat the question
          convo.repeat();
          convo.next();
        }
      }
    ],{},'default');
    
    convo.addQuestion('Shall 2 we proceed Say YES, NO or DONE to quit.',[
      {
        pattern: 'done',
        callback: function(response,convo) {
          convo.say('OK you are done!');
          convo.next();
        }
      },
      {
        pattern: bot.utterances.yes,
        callback: function(response,convo) {
          convo.say('Great! I will continue...');
          // do something else...
          convo.next();

        }
      },
      {
        pattern: bot.utterances.no,
        callback: function(response,convo) {
          convo.say('Perhaps later.');
          // do something else...
          convo.next();
        }
      },
      {
        default: true,
        callback: function(response,convo) {
          // just repeat the question
          convo.repeat();
          convo.next();
        }
      }
    ],{},'default');

  })

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
