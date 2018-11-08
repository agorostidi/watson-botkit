module.exports = function(controller) {
  
// This module sents every msg on chatbot to Watson Assistant
// and writes back the answer 

// Please note that using "sample_hears" I can process specific
// messages that I do not want to be processed here

controller.hears('.*', 'message_received', function(bot, message) {
    if (message.watsonError) {
      console.log('Watson Assistant Error')
      bot.reply(message, "I'm sorry, but for technical reasons I can't respond to your message");
    } else {
      bot.reply(message, message.watsonData.output.text.join('\n'));
    }
  });

}
