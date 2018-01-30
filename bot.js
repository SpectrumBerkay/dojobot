const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("meesage", function(message) {
 console.log(message.content); 
});

client.login(process.env.BOT_TOKEN);
