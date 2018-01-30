const Discord = require("discord.js");
const client = new Discord.Client();

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
});

client.login(process.env.BOT_TOKEN);
