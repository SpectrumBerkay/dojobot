const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ("");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı! Mesaj: ${msg.content} Yazan: ${msg.author.tag}`);
  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.reply('Aleyküm Selam!');
  }
  if (msg.content.toLowerCase() === prefix + 'fuckmylifexd') {
    msg.channel.sendMessage('Hoşgeldin Türkcaaaan');
  }
});

client.login(process.env.BOT_TOKEN);
