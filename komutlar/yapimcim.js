const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    var embed = new Discord.MessageEmbed()
    .setTitle("<a:hype:787435948652363786>Yapımcım<a:hype:787435948652363786>")
    .setDescription("<@725009849628491838> | haise ne la#1959")
    .setImage('https://cdn.discordapp.com/attachments/779426359146446888/787357629080928266/sss.jpg')
    .setColor("RANDOM")
    message.channel.send({embed})
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapimci','yapımcı','yapımcılarım','yapımcılar',],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  kategori: 'genel',
  description: 'Yapımcımı Gosterir.',
 usage: 'yapımcım'
};