const Discord = require('discord.js');
const { channelLive, channelGhost } = require('../config.json');

module.exports = {
    name: 'reunion',
    description: 'unmute everyone in a meeting',
    execute(message, args)
    {
        const voiceChannel = message.member.voice.channel.name;

        if (voiceChannel != channelLive && voiceChannel != channelGhost) {
            return message.channel.send('you need to be on a voice channel called "Amoung Us" OR "Cemetery" ');
        }

        let roleN = 'Muted';
        let verifyRole = message.guild.roles.cache.find(n => n.name === roleN);

        const voiceUsers = message.member.voice.channel.members;
        const getAmoung = message.guild.channels.cache.find(channel => channel.name === channelLive);
        
        voiceUsers.forEach(user => {
            const verifyGhost = user.roles.cache.find(d => d.name === "Ghost");

            if (!verifyGhost) {
                user.voice.setMute(false);
                user.roles.remove(verifyRole);
            } else if(verifyGhost) {
                user.voice.setMute(true);
                user.voice.setChannel(getAmoung.id);
            }

        });

        const reunionEmbed = new Discord.MessageEmbed()
            .setColor('#fc0341')
            .setTitle('EMERGENCY MEETING')
            .setImage('');
        
        message.channel.send(reunionEmbed);
    }
}