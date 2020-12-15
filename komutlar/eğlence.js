const nea = require('discord.js')

exports.run = (client, message,args) => {
 const nea1 = new nea.MessageEmbed()
  .setAuthor("PREFIX : \`.\`  YAPIMCIM : \`jaxx#1000\` ", client.user.avatarURL)
  .setTitle("**Nea Bot Davet Linki**")
  .setColor("RANDOM")
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=786944385383399425&permissions=8&scope=bot`) 
  .setDescription(`
  
  Örnek komut kullanımı: \`.eğlence \`
Botu davet etmek için: \`.davet\`
`)
  

.addField("<a:bmo:787443428500963368> .eğlence  <a:bmo:787443428500963368> ", `
Herkesin Kllanabileceği eğlence komutları;
  :robot: **.aşk**
  :robot: **.balıktut**
  :robot: **.fbi** 
  :robot: **.resimçiz** 
  :robot: ** .yazı-tura**
  :robot: **.slots**  
  :robot: **.adamasmaca**  `  ) 

.setFooter(`Nea`)
  
 
 message.channel.send(nea1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['eğlence'], 
  permLevel: 0 
} 
exports.help = {
  name: "eglence", 
  description: "nea", 
  usage: "eğlence " 
}
