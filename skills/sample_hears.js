module.exports = function(controller) {

    let ingredients = [];
  
  let ingredients_menu = {
    text: '¡Elige un ingrediente!',
    typingDelay: 3000,
    quick_replies: [
        {
            title: 'Mozzarella',
            payload: 'mozzarella'
        },
        {
            title: 'Piña',
            payload: 'pina'
        },
        {
            title: 'Pepperoni',
            payload: 'pepperoni'
        },
        {
            title: 'No quiero más ingredientes',
            payload: 'continue'
        },
    ]
  };

  controller.hears('quiero (.*)',['message_received'],function(bot,message) {
    var desire = message.match[1]; //match[1] is the (.*) group. match[0] is the entire group (open the (.*) doors).
    if (desire === 'pizza') {
      bot.reply(message, '¡Me encanta la pizza!');
      return bot.reply(message, ingredients_menu);
    }
    return bot.reply(message, '¿No prefieres pizza?');
  });

  controller.hears(['pina','mozarrella','pepperoni'],['message_received'],function(bot,message) {
    if(message.text == 'pina')
      bot.reply(message, 'Eres muy exótic@ 🍹');
    else
      bot.reply(message, 'Excelente opción');

    ingredients.push(message.text);
    
    bot.reply(message,'¿Quieres más ingredientes?');
    bot.reply(message, ingredients_menu);
  });

  controller.hears('continue',['message_received'],function(bot,message) {

    bot.reply(message, 'Estos son tus ingredientes');
    bot.reply(message,ingredients.join())
    
    bot.reply(message,{
      text: '¡Enseguida la tendrás lista!. Mientras diviértete en <a href="http://youtube.com" target="_blank">YouTube</a>',
      typingDelay: 3000,
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
