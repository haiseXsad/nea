const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const jaxx = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
  
    .addField("<a:ta_nea:786977511002210306> Botun Kuruluş Tarihi", `10.12.2020,`)
  
    .addField("**<a:nea_atom:787376950296707092> Kaç Kullanıcıya Hizmet Veriyor** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  
    .addField("**<a:hype:787435948652363786> Kaç Sunucuya Hizmet Veriyor**", `${client.guilds.cache.size.toLocaleString()}`, true)
  
    .addField("**<a:yessss:788368481686126613> Kanal Sayısı**", `${client.channels.cache.size.toLocaleString()}`, true)

    .addField("**<a:bummm:787435947288821761> JS Sürüm**",`${Discord.version}`, true)
  
    .addField("**<a:renklita:788368538796687411> Botun Sahibi <a:renklita:788368538796687411>**", `jaxx#1000 <@725009849628491838>`, true)
  
    .addField("**<a:ayar:787641012053999627> İşletim Sistemi**", ` \Windows 8 | 64 Bit\ `, true)
  
    .addField("**<a:oarenkligezegen:787435946643685426> Ping**", client.ws.ping + `ms`, true)


  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['is'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "is",
  usage: "istatiktik"
};