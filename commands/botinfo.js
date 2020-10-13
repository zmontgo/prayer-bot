const Discord = require('discord.js');
const fields = require('../config.json');
const version = fields.version;
const versioninfo = fields.versioninfo;

module.exports.execute = async (client, message) => {
  let infoMessage = new Discord.MessageEmbed()
    .setColor('#C54646')
    .setTitle('Prayer Bot')
    .setThumbnail(
      'https://images-ext-1.discordapp.net/external/2soj2X2BPQkQsH-kOk_5GmgL9_KUvGcNdd2fcN1s7jo/%3Fsize%3D256/https/cdn.discordapp.com/avatars/693840044032786444/b2598077df8a48b63c9da434ba33aab2.png'
    )
    .addField(
      'Description',
      'A helpful guy here to assist in everything you might need!'
    )
    .addField('Version', version)
    .addField('Version Info', versioninfo)
    .addField(
      'GitHub',
      'Want to help us develop this bot? Check out the repo on GitHub! https://github.com/zmontgo/prayer-bot'
    );
  return await message.channel.send(infoMessage);
};

module.exports.config = {
  name: 'botinfo',
  aliases: ['bot', 'info', 'version'],
  module: 'Utility',
  description: 'Learn more about Prayer Bot.',
  usage: ['botinfo'],
};
