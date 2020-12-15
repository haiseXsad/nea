const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

let kanal = message.mentions.channels.first()
let rol = message.mentions.roles.first()
if(!rol) return message.reply(':x: Ayarlamam İçin Bir rol Etiketlemeilisin.')
if(!kanal) return message.reply(':x: Ayarlamam İçin Bir kanal Etiketlemeilisin.')

   
message.reply(`<a:bira:787435945640198195> Otorol aktif edildi\n '${rol}' Olarak Güncelledim!\n Kayıt Kanalını '${kanal}' olarak güncelledim.`)
   
db.set(`judgekanal_${message.guild.id}`, kanal.id)   
  db.set(`judgerol_${message.guild.id}` , rol.id)
 };

exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'otorol-ayarla', 
description: 'taslak',
 usage: 'oto-rol-ayarla' 
};