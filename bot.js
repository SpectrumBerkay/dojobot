const Discord = require("discord.js");
const client = new Discord.Client();
const Prefix = "fbebsi"


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
 if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'fotoğrafım ne') {
    msg.reply(msg.author.avatarURL)
  }
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.reply('Aleyküm Selam!')
  }
  if (msg.content.toLowerCase() === 'bot') {
    msg.reply('ping,!bot')
  }
  
  var args = msg.content.substring(prefix.lenght).split(" ");
  
  switch (args[0]) {
    case "info":
      msg.channel.sendMessage("I'm a super dope bot created my me ")
      break;
    default:
      msg.channel.sendMessage("Invalid command")
  }
});

client.login(process.env.BOT_TOKEN);
