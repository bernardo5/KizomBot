const presentUtils = require('./present.js');
const {START_COMMAND, PARTY_COMMAND, CLASSES_COMMAND, AVAILABLE_COMMANDS} = require('./variables.js');

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const schools =  presentUtils.loadSchools();

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageParts = msg.text.split(' ');
    if(!AVAILABLE_COMMANDS.map(command => command.command).includes(messageParts[0])){
        bot.sendMessage(chatId, presentUtils.getUnIdentifiedMessage(msg));
    }

    let response;
    if(START_COMMAND == messageParts[0]){//start
        response = presentUtils.getFirstIntroduction(msg, AVAILABLE_COMMANDS);
        bot.sendMessage(chatId, response);
    }else if(PARTY_COMMAND == messageParts[0]){//party
        response = presentUtils.getParties(msg);
        bot.sendMessage(chatId, response);
    }else if(CLASSES_COMMAND == messageParts[0]){//classes
        response = presentUtils.getClasses(msg);
        bot.sendMessage(chatId, response);
        for(let key of Object.keys(schools)){
            const schoolRow = schools[key];
            bot.sendMessage(chatId, '/classes ' + schoolRow.Code + ' \t ' + schoolRow.School + ' \t ' + schoolRow.Map + '\n');
        }
    }
    
    
});

bot.on("polling_error", console.log);