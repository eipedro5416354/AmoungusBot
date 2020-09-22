const { channelLive, channelGhost } = require('../config.json'); 

module.exports = {
    name: 'game',
    description: 'create channels to start game',
    async execute(message, args)
    {

        const verifyChannel = message.guild.channels.cache.find(n => n.name === channelLive);
        const verifyGhost = message.guild.roles.cache.find(d => d.name === 'Ghost');
        const roleN = 'Muted';
        const verifyRole = message.guild.roles.cache.find(n => n.name === roleN);

        if (verifyChannel) {
            return message.channel.send(`this channel already exist`);
        } else {
            if (!verifyRole) {
               message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        color: '#d11f2e',
                    },
                    reason: 'we need this to work'
                });
            }
    
            if (!verifyGhost) {
                message.guild.roles.create({
                    data: {
                        name: 'Ghost',
                        color: 'white',
                    },
                    reason: 'did someone die'
                });
            }

            message.guild.channels.create(channelLive, {
                type: 'voice',
            }).then(() => {
                message.guild.channels.create(channelGhost, {
                    type: 'voice',
                })
            });
        }
 
    }
}