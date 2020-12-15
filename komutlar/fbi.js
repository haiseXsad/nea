const haise1 = require('discord.js');
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const haise = new haise1.MessageEmbed()
    .setAuthor('FBIIII')
    .setColor("RANDOM")
    .setDescription(`** ${mesaj} ` + message.author.username + ' FBI Open the door !**')
    .setImage(`https://thumbs.gfycat.com/CriminalSilentKingbird-size_restricted.gif `)
    .setFooter(`Nea <3 Fbi`)
    return message.channel.send(haise);
};
exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'fbi',
  description: 'haise',
  usage: 'Fbi Geldi aç kapıyı',
};  