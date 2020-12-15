const nea = require('discord.js')

exports.run = (client, message,args) => {
 const nea1 = new nea.MessageEmbed()
  .setAuthor("PREFIX : \`.\`  YAPIMCIM : \`jaxx#1000\` ", client.user.avatarURL)
  .setTitle("**Nea Bot Davet Linki**")
  .setColor("RANDOM")
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=786944385383399425&permissions=8&scope=bot`) 
  .setDescription(`
  
  Örnek komut kullanımı: \`.moderasyon\`
Botu davet etmek için: \`.davet\`
`)
 
 .addField("<a:ayar:787641012053999627> .moderasyon ", `
moderasyon komutları;
:robot: **.ban**
:robot: **.bansay**
:robot: **.everhereengel**
:robot: **.kick**
:robot: **.kullanıcı-bilgi**
:robot: **.otorol**
:robot: **.ototag**
:robot: **.istatistik**
:robot: **.reklam-engel**
:robot: **.temizle**
:robot: **.unban**
:robot: **.yavaşmod**
:robot: **.kanal-koruma**
:robot: **.cmute**
:robot: **.oylama**
:robot: **.ping**
:robot: **.rol-koruma**
:robot: **.sa-as**
:robot: **.say**
:robot: **.sunucubilgi**
:robot: **.unban**
:robot: **.unmute**
:robot: **.yapımcım**
:robot: **.toplamkomut**
 `)

 

  .setFooter(`Nea`)
  
 
 message.channel.send(nea1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['mod'], 
  permLevel: 0 
} 
exports.help = {
  name: "moderasyon", 
  description: "nea", 
  usage: "moderasyon" 
}
