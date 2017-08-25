const TelegramBot = require('node-telegram-bot-api');
const token = '419410156:AAH_Yz0q_RYFY4_jKZwW7mJUc7TNg5rNrIs';
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
    "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    }
});
    
});
bot.onText(/\/sendpic/, (msg) => {

bot.sendPhoto(msg.chat.id,"http://www.planwallpaper.com/static/images/Fall-Nature-Background-Pictures.jpg",{caption : "Here we go ! \nThis is just a caption "} );
    
});
bot.on('message', (msg) => {

var hi = "hi";
if (msg.text.toLowerCase().indexOf(hi) === 0) {
bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
} 
    
var bye = "bye";
if (msg.text.toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name); 
} 
var robot = "I'm robot";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
}
});
bot.on('message', (msg) => {
    var location = "location";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id,12.917241, 77.623136);
        bot.sendMessage(msg.chat.id, "Here is the point of contact");

    }
});
