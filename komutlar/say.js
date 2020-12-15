const Discord = require('discord.js');

const mapping = {
  " ": "   ",
   "0": "<a:0_:787301033230729278>",
  "1": "<a:1_:787301048514904084>",
  "2": "<a:2_:787301070593982494>",
  "3": "<a:3_:787301071927508992>",
  "4": "<a:4_:787301071835365387>",
  "5": "<a:5_:787301071940223016>",
  "6": "<a:6_:787301072196075550>",
  "7": "<a:7_:787301072259514378>",
  "8": "<a:8_:787301072506585088>",
  "9": "<a:9_:787301072296869908>",
  "!": "❕",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};
let tags = 'haise'
"abcdefghijklmnopqr".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  
  let offlinesayi = message.guild.members.cache.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrimdışı Kişi** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi:** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let online = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size;;
  let offline2 =  '**Çevrimiçi Kişi:** ' +
     `${online}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")

  let tagsayi = message.guild.members.cache.filter(m => m.user.username.includes(tags)).size
    let tag = '**Tagdaki :** ' +
      `${tagsayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
const embed = new Discord.MessageEmbed()
.setTitle('Sunucu İstatistikleri')
.setColor('BLACK')
.setDescription('' + sunucu + '\n \n' + offline2 + '\n \n' + offline )
.setFooter('')

  message.channel.send(embed)
  let onnl = `**Toplam Üye:** ${sunucu}\n**Aktif Üye:** ${offline2}\n**:** ${tag}`
message.channel.setTopic(onnl)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};