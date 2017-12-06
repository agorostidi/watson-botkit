module.exports = function(controller) {

  controller.hears('quick replies','message_received', function(bot, message) {

    bot.reply(message, {
        text: 'Look, quick replies!',
        quick_replies: [
            {
                title: 'Hello',
                payload: 'hello'
            },
            {
                title: 'Test',
                payload: 'test'
            },
            {
                title: 'Test a',
                payload: 'azul_caballo_blanco'
            },
            {
                title: 'Test b',
                payload: 'este es un caballo blanco'
            },
        ]
      },function() {});


      });

}
