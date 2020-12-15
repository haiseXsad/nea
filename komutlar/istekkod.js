const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : <@prefix>istek ne istiyorsaniz')
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('<a:oarenkligezegen:787435946643685426> İstek Kodunuz başarıyla bildirildi  \nEn Yakın Zamanda Cevap Vereceğiz. ')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **isteği ;**`)
.addField(`:envelope: **Gönderen Kişinin Bilgileri**`, `:white_small_square:Kullanıcı ID: ${message.author.id}\n:white_small_square:Kullanıcı Adı: ${message.author.username}\n:white_small_square:Kullanıcı Tagı: ${message.author.discriminator}`)
.addField("<a:oarenkligezegen:787435946643685426> **Gönderilen İstek/Tavsiye Mesajı**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('787323795538182144').send(embed2); //Mesajın Gideceği Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'istek <istek>'
}