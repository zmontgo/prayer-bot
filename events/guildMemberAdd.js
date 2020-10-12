const config = require('../config.json');
const Discord = require('discord.js');

module.exports = async (client, member) => {
  try {
    console.log(member.user);
    if(member.user.bot) return;
    // Add roles and send welcome message to the welcome channel
    member.guild.channels.cache
      .get(config.channels.welcome)
      .send(
        `🎉 **A new member has arrived!** 🎉\nPlease welcome <@${member.id}> to The Prayer Room <@&765304484649762827>!`
      )
      .then((message) => {
        message.react(config.emotes.wave);
      });

    let welcomeDM = new Discord.MessageEmbed()
      .setColor('#750384')
      .setTitle(':pray: __**Welcome to The Prayer Room!**__ :pray:')
      .setDescription('**This has some important information, and we suggest reading through it. It should take less than a minute.**')
      .addField(
        'Handy Dandy Channels',
        `• You can grab some roles in <#765264740342693908>.
• Introduce yourself with the template pinned in <#765306866506661898>.
• To learn more about the server, check out <#765303928786387043> and <#765247264842448991>.`
      )
      .addField(
        'About The Prayer Room',
        `The Prayer Room is a Christian community dedicated to fellowship with God and with others. We host prayer requests, a Bible study, and discipleship groups. We strive to be a place of peace and community for believers around the world, “For where two or three gather together as my followers, I am there among them.” - Matthew 18:20.`
      )
      .addField(
        'About Me',
        `I'm Prayer Bot, a custom bot made for The Prayer Room! I am always growing. Use \`.help\` in <#765230530434170940> for more on what I can do.`
      )
      .addField(
        'Spread the Word',
        `If you like The Prayer Room and want to share us with your friends, here's a permanent invite link: https://discord.gg/xMGTsRR.`
      );
    member.send(welcomeDM).catch((err) => {
      if (err.name == "DiscordAPIError") {
        welcomeDM.addField(
          'Note',
          'This was sent in this channel, likely because you have disabled DMs from servers. This will be automatically deleted after one minute.'
        );

        return member.guild.channels.get(config.channels.welcome)
        .send(welcomeDM).then(msg => msg.delete(600000).catch());
      }

      console.log(err);
    });
  } catch (err) {
    console.error(err);
  }
};