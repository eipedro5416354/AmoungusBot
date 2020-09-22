const { channelLive, channelGhost } = require('../config.json');

module.exports = {
    name: 'ghost',
    description: 'did someone die',
    execute(message, args)
    {

        const author = message.author.id;
        const voiceUsers = message.member.voice.channel.members;

        const verifyUser = message.guild.members.cache.find(s => s.id === author);
        const verifyGhost = message.guild.roles.cache.find(d => d.name === 'Ghost');

        const getCemetery = message.guild.channels.cache.find(channel => channel.name === channelGhost);
        const getAmoung = message.guild.channels.cache.find(channel => channel.name === channelLive);

        if (args[0] === 'reset') {
            voiceUsers.forEach(user => {
                user.voice.setMute(false);
                user.roles.remove(verifyGhost);
                user.voice.setChannel(getAmoung.id);
            });
        } else  {
            verifyUser.roles.add(verifyGhost);
            verifyUser.voice.setChannel(getCemetery.id);
        }
        
    }
}