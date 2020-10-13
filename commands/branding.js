const Discord = require('discord.js');

module.exports.execute = async (client, message, args) => {
  if (args.length) {
    if (args[0] == 'colors') {
      const brandEmbed = new Discord.MessageEmbed()
        .setTitle('The Prayer Room Color Scheme')
        .setDescription(
          'Orange: #FF8C00\nTangerine: #C54646\nPurple: #8B008B'
        )
        .setColor('#C54646');
      return await message.channel.send(brandEmbed);
    } else if (args[0] == 'logo' || args[0] == 'icon') {
      const brandEmbed = new Discord.MessageEmbed()
        .setTitle('The Prayer Room Logo')
        .attachFiles([
          'https://media.discordapp.net/attachments/765226048237076523/765348156623290388/prayerlogo4.png',
        ])
        .setImage('attachment://logo.png')
        .setColor('#750384');
      return await message.channel.send(brandEmbed);
    } else {
      const brandEmbed = new Discord.MessageEmbed()
        .setTitle('The Prayer Room Branding')
        .setDescription(
          'Orange: #FF8C00\nTangerine: #C54646\nPurple: #8B008B'
        )
        .setThumbnail(
          'https://media.discordapp.net/attachments/765226048237076523/765348156623290388/prayerlogo4.png'
        )
        .setColor('#C54646');
      return await message.channel.send(brandEmbed);
    }
  } else {
    const brandEmbed = new Discord.MessageEmbed()
      .setTitle('The Prayer Room Branding')
      .setDescription(
        'Orange: #FF8C00\nTangerine: #C54646\nPurple: #8B008B'
      )
      .setThumbnail(
        'https://media.discordapp.net/attachments/765226048237076523/765348156623290388/prayerlogo4.png'
      )
      .setColor('#C54646');
    return await message.channel.send(brandEmbed);
  }
};

module.exports.config = {
  name: 'brand',
  aliases: ['colors', 'branding', 'colorscheme'],
  module: 'Utility',
  description: "The Prayer Room's branding and color scheme!",
  usage: ['brand [colors | logo]'],
};
