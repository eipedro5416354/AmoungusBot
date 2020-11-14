const Discord = require('discord.js');
const { channelLive, channelGhost } = require('../config.json');

module.exports = {
    name: 'mute',
    description: 'mute all in specific channel',
    async execute(message, args)
    {
        const voiceChannel = message.member.voice.channel.name;

        if (voiceChannel != channelLive && voiceChannel != channelGhost) {
            return message.channel.send('you need to be on a voice channel called "「🎭」Among Us" OR "Cemetery" ');
        }

        const voiceUsers = message.member.voice.channel.members;
        const getCemetery = message.guild.channels.cache.find(channel => channel.name === channelGhost);

        let roleN = 'Muted';
        let verifyRole = message.guild.roles.cache.find(n => n.name === roleN);

        const reunionEmbed = new Discord.MessageEmbed()
        .setColor('#fc0341')
        .setTitle('SHHHHHHH!')
        .setImage('');
    
        message.channel.send(reunionEmbed);
        
        await voiceUsers.forEach(user => {
            const verifyGhost = user.roles.cache.find(d => d.name === "Ghost");
            if (!verifyGhost) {
                user.voice.setMute(true);
                user.roles.add(verifyRole);
            } else if (verifyGhost) {
                user.voice.setChannel(getCemetery.id);
                user.voice.setMute(false);
            }
        });
        
    }
}
