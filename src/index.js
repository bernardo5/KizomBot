const presentUtils = require('./present.js');
const {START_COMMAND, PARTY_COMMAND, CLASSES_COMMAND, AVAILABLE_COMMANDS} = require('./variables.js');

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

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
    }else if(PARTY_COMMAND == messageParts[0]){//party
        response = presentUtils.getParties(msg);
    }else if(CLASSES_COMMAND == messageParts[0]){//classes
        response = presentUtils.getClasses(msg);
    }
    bot.sendMessage(chatId, response);
    
});

//ping heroku to prevent iddle
const http = require('http');
function keepAlive(){
    setInterval(function(){
        const options = {
            host: 'https://kizombot.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, function(res){

        });
    }, 20000);
}
keepAlive();