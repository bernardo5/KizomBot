module.exports.getUnIdentifiedMessage = function(msg){
    let intro = 'Hello ' + (msg.from.first_name ? msg.from.first_name : '') + ' ' + (msg.from.last_name ? msg.from.last_name : '') + '! π';
    intro += '\n\nThanks for your message! Unfortunately, I could not recognize it as a command π';
    intro += '\n\nPlease type /start to view my commands! π';
    return intro;
}

module.exports.getFirstIntroduction = function(msg, AVAILABLE_COMMANDS){
    let intro = 'Hello ' + (msg.from.first_name ? msg.from.first_name : '') + ' ' + (msg.from.last_name ? msg.from.last_name : '') + '! π';
    intro += ' It\'s so nice to meet you!\n\n';
    intro += 'I\'m KizomBot! π€ The Telegram Bot that knows all about Kizomba in Lisbon! πΊπ π€';

    intro += '\n\n Here are my available commands:\n';
    AVAILABLE_COMMANDS.forEach(command => {
        intro += command.command + '--> ' + command.description + '\n';
    });

    intro += '\n I hope you find this information useful! Happy dancing! πΊπ';
    return intro;
}

module.exports.getParties = function(msg){
    return 'Hi! Thanks for your interest in this bot π€ usage! π\n\nPlease note this is a work in progress, not it finished... π·ββοΈ\n\nPlease come back later β° to check the latest news! π';
}

module.exports.getClasses = function(msg){
    return 'Hi! Thanks for your interest in this bot π€ usage! π\n\nPlease note this is a work in progress, not it finished... π·ββοΈ\n\nPlease come back later β° to check the latest news! π';
}