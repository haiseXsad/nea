
const nea = require('discord.js')

exports.run = (client, message,args) => {
 const nea1 = new nea.MessageEmbed()
 .setAuthor("▬▬▬▬Prefix:\`.\`  Yapımcı:\`jaxx#1000\`▬▬▬ ", client.user.avatarURL)
  .setColor('RANDOM')
  .setTitle("**Nea Davet Linki**") 
 .setURL(`https://discord.com/api/oauth2/authorize?client_id=786944385383399425&permissions=8&scope=bot`) 
  .setDescription(`
                  
 **.yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`.ms \`
Botu davet etmek için: \`.davet\`
`)
      .setTitle("<a:mudlumandar:787435946756800522> • Botu Eklemek için") 
.setURL(`https://discord.com/api/oauth2/authorize?client_id=786944385383399425&permissions=8&scope=bot`)
 

  

 
  .addField("<a:ayar:787641012053999627> .eğlence ", `
 eğlence komutları
`)



.addField("<a:ayar:787641012053999627> .moderasyon ", `
moderasyon komutları
 `)
 
.addField("<a:hype:787435948652363786>▬▬▬▬Bilgi Kısmı▬▬▬▬<a:hype:787435948652363786>",`
<a:bummm:787435947288821761> • Javascript Sürümü : V12
<a:kedi:787435947657920522> • Ayrıntılı Bilgi Için : .yardım
<a:oarenkligezegen:787435946643685426> • Bug Bildirmek Için ve Istek Kodlarınızı Bildirmek Için .istek <Isteginiz>
<a:pika:787981425223532554> • Istedikleriniz Duyuru Bölümünde Gösterilir`
)
 
.addField("<a:megaaaa:787982908832219177>▬▬▬▬Duyuru Kısmı▬▬▬▬<a:megaaaa:787982908832219177>",` 
 <a:oarenkligezegen:787435946643685426> • Herkeze Inat Verified Alamiyacağımı Bilsemde Bot Yapmaya Devam Edicem Iyi Günler<@725009849628491838>   
 <a:bummm:787435947288821761> • Yakında Logolar Geliyor Iyi Günler ;)

 ` )
 

 
 .setImage(`https://cdn.discordapp.com/attachments/787710364535619624/788281698563129364/heyyy.gif`)
  
 
 message.channel.send(nea1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['help','yardim'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "nea", 
  usage: "yardım" 
}
