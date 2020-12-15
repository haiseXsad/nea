const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var espriler = ['Sazan Tuttun! :fish:' ,'Köpek Balığı Tuttun İyi Para Eder  Sat :D' ,'Uskumru Tuttun! :fish:' ,'Mezgit Tuttun! Havyarıda Var hee ;) :fish:' ,'Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?' ,'Hamsi Tuttun! :fish:' ,'Levrek Tuttun! :fish:' ,'Hiçbirşey Tutamadın Maalesef! :wastebasket:' ,'Alabalık Tuttun! :fish:' ,'Maalesef Balık Oltadan Kaçtı! :wastebasket:' ,'İstavrit Tuttun! :fish:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  guildOnly: false,
  aliases: ['balktut','baliktut'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: ''
};