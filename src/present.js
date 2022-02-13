module.exports.getUnIdentifiedMessage = function(msg){
    let intro = 'Hello ' + (msg.from.first_name ? msg.from.first_name : '') + ' ' + (msg.from.last_name ? msg.from.last_name : '') + '! 👋';
    intro += '\n\nThanks for your message! Unfortunately, I could not recognize it as a command 😔';
    intro += '\n\nPlease type /start to view my commands! 😃';
    return intro;
}

module.exports.getFirstIntroduction = function(msg, AVAILABLE_COMMANDS){
    let intro = 'Hello ' + (msg.from.first_name ? msg.from.first_name : '') + ' ' + (msg.from.last_name ? msg.from.last_name : '') + '! 👋';
    intro += ' It\'s so nice to meet you!\n\n';
    intro += 'I\'m KizomBot! 🤖 The Telegram Bot that knows all about Kizomba in Lisbon! 🕺💃 🤖';

    intro += '\n\n Here are my available commands:\n';
    AVAILABLE_COMMANDS.forEach(command => {
        intro += command.command + '--> ' + command.description + '\n';
    });

    intro += '\n I hope you find this information useful! Happy dancing! 🕺💃';
    return intro;
}

module.exports.getParties = function(msg){
    return 'Hi! Thanks for your interest in this bot 🤖 usage! 🙏\n\nPlease note this is a work in progress, not it finished... 👷‍♂️\n\nPlease come back later ⏰ to check the latest news! 🗞';
}

module.exports.getClasses = function(msg){
    return 'Hi! Thanks for your interest in this bot 🤖 usage! 🙏\n\nPlease note this is a work in progress, not it finished... 👷‍♂️\n\nPlease come back later ⏰ to check the latest news! 🗞';
}