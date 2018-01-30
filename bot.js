const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("!");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  }
  if (msg.content.toLowerCase() === 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === 'sa' {
    msg.reply('Aleyküm Selam!');
  }
  if (msg.content.toLowerCase() === 'fuckmylifexd') {
    msg.channel.sendMessage('Hoşgeldin Türkcaaaan');
  }
});

client.login(process.env.BOT_TOKEN);
