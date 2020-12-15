const nea = require('discord.js');

exports.run = async(client, message) => {

let haise = new nea.MessageEmbed()
.setColor("RANDOM")
.addField("**<a:kedi:787435947657920522> Gecikme Sürem <a:kedi:787435947657920522>**", `**${client.ws.ping}** ms Olarak Hesaplandı.`,true)

message.channel.send(haise)

}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' 
};