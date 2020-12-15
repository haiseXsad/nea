const nea = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new nea.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Nea Bot`, client.user.avatarURL)
    .addField(
      `> <a:mudlumandar:787435946756800522> Neden Nea Bot ?`,
      `** Çünkü Botumuzun Iyi Olduğunu Düşünüyoruz.**`
    )
    .addField(
      `> <a:mudlumandar:787435946756800522> Botumuzu Davet Etmek isterseniz`,
      `[Botu Davet Et!](https://discord.com/api/oauth2/authorize?client_id=786944385383399425&permissions=8&scope=bot)`
    )
    .addField(
      `> <a:mudlumandar:787435946756800522> Destek Sunucusuna Katılmak İsterseniz`,
      `[Destek Sunusu](https://discord.gg/4xWxDNTtyQ)`
    )
    
    .addField(
      `> <a:mudlumandar:787435946756800522> Sitemize Göz Atmak isterseniz`,
      `[Sitemiz](https://haise-.glitch.me/)`
    )

    .setThumbnail(
      "https://cdn.discordapp.com/emojis/786977511002210306.gif?v=1"
    );
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: "",
  usage: ""
};